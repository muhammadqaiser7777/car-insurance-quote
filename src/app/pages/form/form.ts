import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VehicleDataService } from './services/vehicle-data.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 9;
  vehicles: any[] = [];
  currentVehicle: any = {
    make: '',
    model: '',
    submodel: '',
    year: '',
    coverage_type: '',
    garage: '',
    ownership: '',
    primary_use: '',
    annual_miles: '',
    currently_insured: ''
  };
  addAnotherVehicle: string = '';
  license_state: string = '';
  license_status: string = '';
  first_name: string = '';
  last_name: string = '';
  date_of_birth: string = '';
  marital_status: string = '';
  education: string = '';
  logoUrl: string = 'assets/images/default.webp';
  formTitle: string = 'Get your auto insurance quote';
  agreement: boolean = true;
  ipaddress: string = '';
  universalLeadid: string = '';
  xxTrustedFormCertUrl: string = '';
  aff_id: string = '';
  transaction_id: string = '';
  sub_aff_id: string = '';
  isValidatingIP: boolean = false;
  isUSCitizen: boolean = true;
  showThankYou: boolean = false;
  isSubmitting: boolean = false;
  private leadiDAttemptTimer: any = null;
  private trustedFormPollTimer: any = null;
  private trustedFormInjected = false;
  private leadIdInjected = false;
  private trustedFormReady = false;
  private leadIdReady = false;

  availableModels: string[] = [];
  availableSubmodels: string[] = [];
  availableYears: string[] = [];

  errors: { [key: string]: string } = {};

  constructor(private http: HttpClient, private router: Router, private renderer: Renderer2, private el: ElementRef, public vehicleDataService: VehicleDataService) {}

  ngOnInit() {
    this.fetchIPAddress();
    this.parseUrlParams();
    this.injectTrustedFormPing();
    // Start injecting TrustedForm and LeadID immediately on load
    this.injectTrustedForm();
    // Start trying LeadiD injection after 10s; then retry every 2s until success or submit
    setTimeout(() => this.startLeadiDInjectionLoop(), 10000);
  }



  fetchIPAddress() {
    this.http.get('https://api64.ipify.org?format=json').subscribe({
      next: (data: any) => {
        this.ipaddress = data.ip;
      },
      error: () => {
        // Retry after 1 second
        setTimeout(() => this.fetchIPAddress(), 1000);
      }
    });
  }

  parseUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    this.aff_id = urlParams.get('aff_id') || '';
    this.transaction_id = urlParams.get('transaction_id') || '';
    this.sub_aff_id = urlParams.get('sub_aff_id') || '';

    // Clean URL immediately (don't delay cleanup)
    if (this.aff_id || this.transaction_id || this.sub_aff_id) {
      try { window.history.replaceState(null, '', window.location.pathname); } catch (e) { /* ignore */ }
    }
  }

  onMakeChange() {
    this.currentVehicle.model = '';
    this.currentVehicle.submodel = '';
    this.availableModels = this.vehicleDataService.models[this.currentVehicle.make] || [];
    this.availableSubmodels = [];
    if (this.currentVehicle.make) {
      this.logoUrl = 'assets/images/' + this.currentVehicle.make.toLowerCase().replace(/\s+/g, '-') + '.webp';
      this.formTitle = 'Get your ' + this.currentVehicle.make + ' Insurance Quote';
    } else {
      this.logoUrl = 'assets/images/default.webp';
      this.formTitle = 'Get your auto insurance quote';
    }
  }

  onModelChange() {
    this.currentVehicle.submodel = '';
    this.currentVehicle.year = '';
    this.availableSubmodels = this.vehicleDataService.submodels[this.currentVehicle.make + ' ' + this.currentVehicle.model] || [];
    this.availableYears = [];
  }

  onSubmodelChange() {
    this.currentVehicle.year = '';
    const key = this.currentVehicle.make + ' ' + this.currentVehicle.model + ' ' + this.currentVehicle.submodel;
    this.availableYears = this.vehicleDataService.years[key] || this.getDefaultYears();
  }

  private getDefaultYears(): string[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = 1980; y <= currentYear + 1; y++) {
      years.push(y.toString());
    }
    return years;
  }

  nextStep() {
    this.errors = {};

    // Inject TrustedForm script if not present, like in handleChange
    if (!document.querySelector("script[src*='trustedform.com/trustedform.js?field=xxTrustedFormCertUrl']")) {
      (function() {
        var tf = document.createElement('script');
        tf.type = 'text/javascript';
        tf.async = true;
        tf.src = (document.location.protocol === "https:" ? 'https' : 'http') +
          '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
          new Date().getTime() + Math.random();
        var s = document.getElementsByTagName('script')[0];
        if (s.parentNode) s.parentNode.insertBefore(tf, s);
      })();
    }

    // Poll for TrustedForm value
    setTimeout(() => {
      const certInput = document.querySelector("input[name='xxTrustedFormCertUrl']");
      if (certInput && (certInput as HTMLInputElement).value) {
        this.xxTrustedFormCertUrl = (certInput as HTMLInputElement).value;
      }
    }, 500);
    if (this.currentStep === 8) {
      if (this.validateCurrentStep()) {
        this.isValidatingIP = true;
        this.http.get(`https://ipapi.co/${this.ipaddress}/json/`).subscribe({
          next: (data: any) => {
            this.isUSCitizen = data.country === "US";
            this.isValidatingIP = false;
            // Data captured logged
            if (this.currentStep < this.totalSteps) {
              this.currentStep++;
            }
            if (!this.isUSCitizen) {
              this.errors['general'] = 'This service is only for US citizens.';
            }
          },
          error: () => {
            this.isUSCitizen = true;
            this.isValidatingIP = false;
            // Data captured logged - error case
            if (this.currentStep < this.totalSteps) {
              this.currentStep++;
            }
          }
        });
      }
    } else if (this.validateCurrentStep()) {
      if (this.currentStep === 4) {
        if (this.addAnotherVehicle === 'Yes') {
          this.vehicles.push({ ...this.currentVehicle });
          this.currentVehicle = {
            make: '',
            model: '',
            submodel: '',
            year: '',
            coverage_type: '',
            garage: '',
            ownership: '',
            primary_use: '',
            annual_miles: '',
            currently_insured: ''
          };
          this.addAnotherVehicle = '';
          this.currentStep = 1;
          this.logoUrl = 'assets/images/default.webp';
          this.formTitle = 'Get your auto insurance quote';
          this.availableModels = [];
          this.availableSubmodels = [];
          this.availableYears = [];
        } else if (this.addAnotherVehicle === 'No') {
          this.vehicles.push({ ...this.currentVehicle });
          this.currentStep = 5;
        }
      } else if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    let valid = true;
    if (this.currentStep === 1) {
      if (!this.currentVehicle.make) {
        this.errors['make'] = 'Please select a car make.';
        valid = false;
      }
      if (!this.currentVehicle.model) {
        this.errors['model'] = 'Please select a car model.';
        valid = false;
      }
      if (!this.currentVehicle.submodel) {
        this.errors['submodel'] = 'Please select a car submodel.';
        valid = false;
      }
      if (!this.currentVehicle.year) {
        this.errors['year'] = 'Please select a car year.';
        valid = false;
      }
    } else if (this.currentStep === 4) {
      if (!this.addAnotherVehicle) {
        this.errors['add_another'] = 'Please select yes or no.';
        valid = false;
      }
    } else if (this.currentStep === 6) {
      if (!this.license_state) {
        this.errors['license_state'] = 'Please select a license state.';
        valid = false;
      }
      if (!this.license_status) {
        this.errors['license_status'] = 'Please select a license status.';
        valid = false;
      }
    } else if (this.currentStep === 7) {
      if (!this.first_name) {
        this.errors['first_name'] = 'Please enter your first name.';
        valid = false;
      }
      if (!this.last_name) {
        this.errors['last_name'] = 'Please enter your last name.';
        valid = false;
      }
      if (!this.date_of_birth) {
        this.errors['date_of_birth'] = 'Please enter your date of birth.';
        valid = false;
      }
    } else if (this.currentStep === 8) {
      if (!this.marital_status) {
        this.errors['marital_status'] = 'Please select your marital status.';
        valid = false;
      }
      if (!this.education) {
        this.errors['education'] = 'Please select your education level.';
        valid = false;
      }
    } else if (this.currentStep === 9) {
      if (!this.agreement) {
        this.errors['agreement'] = 'You must agree to the terms and conditions.';
        valid = false;
      }
    }
    return valid;
  }


  async submit() {
    this.errors = {};
    if (this.validateCurrentStep()) {
      this.isSubmitting = true;
      
      // Read values from DOM
      this.universalLeadid = (document.getElementById('leadid_token') as HTMLInputElement)?.value || '';
      this.xxTrustedFormCertUrl = (document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement)?.value || '';

      const payload = {
        vehicles: this.vehicles,
        license_state: this.license_state,
        license_status: this.license_status,
        first_name: this.first_name,
        last_name: this.last_name,
        date_of_birth: this.date_of_birth,
        marital_status: this.marital_status,
        education: this.education,
        agreement: this.agreement,
        ipaddress: this.ipaddress,
        universalLeadid: this.universalLeadid,
        xxTrustedFormCertUrl: this.xxTrustedFormCertUrl,
        aff_id: this.aff_id,
        transaction_id: this.transaction_id,
        sub_aff_id: this.sub_aff_id,
        url: window.location.href,
        browser: navigator.userAgent
      };
      
      this.http.post('https://get-roofing.com/api/ping-proxy.php', payload).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showThankYou = true;
          // Clear polling timers on successful submission
          if (this.leadiDAttemptTimer) {
            clearInterval(this.leadiDAttemptTimer);
            this.leadiDAttemptTimer = null;
          }
          if (this.trustedFormPollTimer) {
            clearTimeout(this.trustedFormPollTimer);
            this.trustedFormPollTimer = null;
          }
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.errors['general'] = 'Something went wrong, please click submit again.';
        }
      });
    }
  }
  private injectLeadiD(): void {
    try {
      // Avoid duplicate injection
      if (this.leadIdInjected) return;
      
      // Ensure the hidden input exists with the correct id and name
      let leadIdInput = document.getElementById('leadid_token') as HTMLInputElement | null;
      if (!leadIdInput) {
        const input = document.createElement('input') as HTMLInputElement;
        input.type = 'hidden';
        input.id = 'leadid_token';
        input.name = 'universal_leadid';
        document.body.appendChild(input);
        leadIdInput = input;
      }

      // Remove old script if it exists
      const oldScript = document.getElementById('LeadiDscript_campaign');
      if (oldScript) {
        oldScript.parentNode?.removeChild(oldScript);
      }

      // Ensure anchor script exists
      let anchor = document.getElementById('LeadiDscript') as HTMLScriptElement | null;
      if (!anchor) {
        anchor = document.createElement('script') as HTMLScriptElement;
        anchor.id = 'LeadiDscript';
        anchor.type = 'text/javascript';
        document.body.appendChild(anchor);
      }

      // Inject campaign script (only if anchor exists now)
      if (anchor.parentNode) {
        const s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//create.lidstatic.com/campaign/548c86c2-3c24-2ec2-b201-274ffb0f5005.js?snippet_version=2';
        anchor.parentNode.insertBefore(s, anchor);
      }

      this.leadIdInjected = true;
    } catch (e) {
      console.error('Failed to inject LeadiD:', e);
      // mark as not injected so retry loop can try again
      this.leadIdInjected = false;
    }
  }

  // Start a 2s retry loop that attempts to inject LeadiD and reads the lead id until success or submit
  private startLeadiDInjectionLoop(): void {
    if (this.leadiDAttemptTimer) return;

    const attempt = () => {
      if (this.showThankYou || this.leadIdReady) {
        if (this.leadiDAttemptTimer) {
          clearInterval(this.leadiDAttemptTimer);
          this.leadiDAttemptTimer = null;
        }
        return;
      }

      // Try to inject (idempotent)
      this.injectLeadiD();

      // Read the hidden field
      const el = document.getElementById('leadid_token') as HTMLInputElement | null;
      const val = el?.value || '';
      if (val) {
        this.universalLeadid = val;
        this.leadIdReady = true;
        if (this.leadiDAttemptTimer) {
          clearInterval(this.leadiDAttemptTimer);
          this.leadiDAttemptTimer = null;
        }
      }
    };

    // First immediate attempt, then every 2s
    attempt();
    this.leadiDAttemptTimer = setInterval(attempt, 2000);
  }
  private injectTrustedForm() {
    try {
      // Avoid duplicate injection
      if (document.getElementById('trustedform-loader') || this.trustedFormInjected) return;

      const tf = document.createElement('script');
      tf.type = 'text/javascript';
      tf.async = true;
      tf.id = 'trustedform-loader';
      tf.src = (document.location.protocol === 'https:' ? 'https' : 'http') +
        '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&use_tagged_consent=true&l=' +
        new Date().getTime() + Math.random();

      document.body.appendChild(tf);
      this.trustedFormInjected = true;

      // Poll the hidden field for the value until success or submission
      const poll = () => {
        if (this.showThankYou) return;
        const el = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement | null;
        const val = el?.value || '';
        if (val) {
          this.xxTrustedFormCertUrl = val;
          this.trustedFormReady = true;
        } else {
          this.trustedFormPollTimer = setTimeout(poll, 300);
        }
      };
      this.trustedFormPollTimer = setTimeout(poll, 500);
    } catch (e) {
      console.error('Failed to inject TrustedForm:', e);
      // Retry injection after 2 seconds on error
      setTimeout(() => {
        this.trustedFormInjected = false;
        this.injectTrustedForm();
      }, 2000);
    }
  }
  private injectTrustedFormPing() {
    const trustedFormPingScript = document.createElement("script");
    trustedFormPingScript.innerHTML = `
      function recordTrustedFormPing() {
        var pingUrlField = document.querySelector("input[name='xxTrustedFormPingUrl']");
        if (pingUrlField && pingUrlField.value) {
          var img = document.createElement("img");
          img.src = pingUrlField.value;
          img.style.display = "none";
          document.body.appendChild(img);
        }
      }
      window.addEventListener("beforeunload", recordTrustedFormPing);
    `;
    document.body.appendChild(trustedFormPingScript);
  }
}