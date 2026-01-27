import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { VehicleDataService } from './services/vehicle-data.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 18;
  vehicles: any[] = [];
  currentVehicle: any = {
    make: '',
    model: '',
    submodel: '',
    year: '',
    vin: '',
    coverage_type: '',
    garage: '',
    ownership: '',
    primary_use: '',
    annual_miles: '',
    currently_insured: '',
    current_insurer: '',
    current_expiry: '',
    length_insured: ''
  };
   addAnotherVehicle: string = '';
   drivers: any[] = [];
   currentDriver: any = {
     license_state: '',
     license_status: '',
     date_of_birth: '',
     marital_status: '',
     education: '',
     occupation: '',
     creditRating: '',
     currentResidence: '',
     yearsAtResidence: '',
     suspendedLicense: '',
     sr22: '',
     accidents_past_12_months: '',
     num_accidents: '',
     claims_past_12_months: '',
     num_claims: '',
     tickets_past_12_months: '',
     num_tickets: '',
     major_violations_past_12_months: '',
     num_major_violations: ''
   };
   addAnotherDriver: string = '';
   license_state: string = '';
  license_status: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  phone: string = '';
  state: string = '';
  zip: string = '';
  city: string = '';
  street_address: string = '';
  date_of_birth: string = '';
  maxDate: string = '';
  minDate: string = '';
  marital_status: string = '';
  education: string = '';
  occupation: string = '';
  creditRating: string = '';
  currentResidence: string = '';
  yearsAtResidence: string = '';
  suspendedLicense: string = '';
  sr22: string = '';
  tickets_past_12_months: string = '';
  num_tickets: string = '';
  major_violations_past_12_months: string = '';
  num_major_violations: string = '';
  accidents_past_12_months: string = '';
  num_accidents: string = '';
  claims_past_12_months: string = '';
  num_claims: string = '';
  logoUrl: string = 'assets/images/default.webp';
  formTitle: string = 'Get your Insurance Quote';
  agreement: boolean = true;
  ipaddress: string = '';
  universalLeadid: string = '';
  xxTrustedFormCertUrl: string = '';
  aff_id: string = '';
  transaction_id: string = '';
  sub_aff_id: string = '';
  isValidatingIP: boolean = false;
  isValidatingZip: boolean = false;
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

  areaCodesUS = [
    // Alabama
    205, 251, 256, 334, 659,
    // Alaska
    907,
    // Arizona
    480, 520, 602, 623, 928,
    // Arkansas
    479, 501, 870,
    // California
    209, 213, 279, 310, 323, 341, 408, 415, 424, 442, 510, 530, 559,
    562, 619, 626, 650, 657, 661, 669, 707, 714, 747, 760, 805, 818,
    820, 831, 858, 909, 916, 925, 949, 951, 628,
    // Colorado
    303, 719, 720, 970,
    // Connecticut
    203, 475, 860, 959,
    // Delaware
    302,
    // District of Columbia
    202,
    // Florida
    239, 305, 321, 352, 386, 407, 561, 689, 727, 754, 772, 786,
    813, 850, 863, 904, 941, 954,
    // Georgia
    229, 404, 470, 478, 678, 706, 762, 770, 912,
    // Hawaii
    808,
    // Idaho
    208, 986,
    // Illinois
    217, 224, 309, 312, 331, 464, 618, 630, 708, 773, 815, 847, 872,
    // Indiana
    219, 260, 317, 463, 574, 765, 812, 930,
    // Iowa
    319, 515, 563, 641, 712,
    // Kansas
    316, 620, 785, 913,
    // Kentucky
    270, 364, 502, 606, 859,
    // Louisiana
    225, 318, 337, 504, 985,
    // Maine
    207,
    // Maryland
    240, 301, 410, 443, 667,
    // Massachusetts
    339, 351, 413, 508, 617, 774, 781, 857, 978,
    // Michigan
    231, 248, 269, 313, 517, 586, 616, 734, 810, 906, 947, 989,
    // Minnesota
    218, 320, 507, 612, 651, 763, 952,
    // Mississippi
    228, 601, 662, 769,
    // Missouri
    314, 417, 573, 636, 660, 816,
    // Montana
    406,
    // Nebraska
    308, 402, 531,
    // Nevada
    702, 725, 775,
    // New Hampshire
    603,
    // New Jersey
    201, 551, 609, 640, 732, 848, 856, 862, 908, 973,
    // New Mexico
    505, 575,
    // New York
    212, 315, 332, 347, 516, 518, 585, 607, 631, 646, 716,
    718, 838, 845, 914, 917, 929, 934,
    // North Carolina
    252, 336, 704, 743, 828, 910, 919, 980, 984,
    // North Dakota
    701,
    // Ohio
    216, 220, 234, 330, 380, 419, 440, 513, 567, 614, 740, 937,
    // Oklahoma
    405, 539, 580, 918,
    // Oregon
    458, 503, 541, 971,
    // Pennsylvania
    215, 223, 267, 272, 412, 445, 484, 570, 610, 717, 724, 814, 878,
    // Rhode Island
    401,
    // South Carolina
    803, 839, 843, 854, 864,
    // South Dakota
    605,
    // Tennessee
    423, 615, 629, 731, 865, 901, 931,
    // Texas
    210, 214, 254, 281, 325, 346, 361, 409, 430, 432, 469, 512,
    682, 713, 726, 737, 806, 817, 830, 832, 903, 915, 936, 940,
    945, 956, 972, 979,
    // Utah
    385, 435, 801,
    // Vermont
    802,
    // Virginia
    276, 434, 540, 571, 703, 757, 804, 826, 948,
    // Washington
    206, 253, 360, 425, 509, 564,
    // West Virginia
    304, 681,
    // Wisconsin
    262, 414, 534, 608, 715, 920,
    // Wyoming
    307,
    // Puerto Rico
    787, 939,
    // U.S. Virgin Islands
    340
    ];
    insurers: string[] = [
      'Other',
      '21st Century Insurance',
      'AAA Insurance',
      'Allied',
      'Allstate',
      'American Family',
      'American National Insurance',
      'Amica',
      'Auto Owners',
      'Cal Farm Insurance',
      'Chubb Insurance',
      'Citizens',
      'Cotton States Insurance',
      'Country Financial & Insurance',
      'Erie',
      'Esurance',
      'Farm Bureau',
      'Farmers Insurance',
      'GEICO',
      'GMAC Insurance',
      'Hartford',
      'Infinity Insurance',
      'Kemper',
      'Liberty Mutual',
      'Mercury',
      'Metlife',
      'Metropolitan Insurance',
      'Nationwide',
      'Progressive',
      'SAFECO',
      'Safeway Insurance',
      'Sentry Insurance Company',
      'Shelter Insurance Company',
      'State Farm',
      'Travelers',
      'Tri-State Consumer Insurance',
      'Unitrin Direct',
      'USAA'
    ];
    lengthInsuredOptions: string[] = [
      'less than 1 year',
      '1 to 2 years',
      '2 to 3 years',
      '3 to 4 years',
      '4 to 5 years',
      '5 years or more'
    ];

  constructor(private http: HttpClient, private router: Router, private renderer: Renderer2, private el: ElementRef, public vehicleDataService: VehicleDataService) {}

  ngOnInit() {
    this.fetchIPAddress();
    this.parseUrlParams();
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    this.minDate = new Date().toISOString().split('T')[0];
    this.injectTrustedFormPing();
    // Start injecting TrustedForm and LeadID immediately on load
    this.injectTrustedForm();
    // Start trying LeadiD injection immediately; then retry every 2s until success or submit
    this.startLeadiDInjectionLoop();
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
      this.formTitle = 'Get your Insurance on Wheel';
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

  onVinInput() {
    this.currentVehicle.vin = this.currentVehicle.vin.toUpperCase().replace(/[^0-9A-HJ-NPR-Z]/g, '').substring(0,17);
  }

  private getDefaultYears(): string[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = 1980; y <= currentYear + 1; y++) {
      years.push(y.toString());
    }
    return years;
  }

  async nextStep() {
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
    if (this.currentStep === 16) {
      if (await this.validateCurrentStep()) {
        this.isValidatingZip = true;
        this.http.get(`https://steermarketeer.com/api/a9f3b2c1e7d4?zip=${this.zip}`).subscribe({
          next: (data: any) => {
            if (data.state_name === 'Unknown') {
              this.errors['zip'] = 'Invalid zip code.';
              this.isValidatingZip = false;
            } else if (data.zip_state !== this.state) {
              this.errors['zip'] = 'Invalid zip code for selected state.';
              this.isValidatingZip = false;
            } else {
              this.http.get(`https://api.zippopotam.us/us/${this.zip}`).subscribe({
                next: (data2: any) => {
                  this.city = data2.places[0]['place name'];
                  this.isValidatingZip = false;
                  if (this.currentStep < this.totalSteps) {
                    this.currentStep++;
                  }
                },
                error: () => {
                   // API failure, proceed anyway
                   this.isValidatingZip = false;
                   if (this.currentStep < this.totalSteps) {
                     this.currentStep++;
                   }
                 }
              });
            }
          },
          error: () => {
              // API failure, proceed anyway
              this.isValidatingZip = false;
              if (this.currentStep < this.totalSteps) {
                this.currentStep++;
              }
            }
        });
      }
    } else if (this.currentStep === 17) {
      if (await this.validateCurrentStep()) {
        this.currentStep = 19;
      }
    } else if (await this.validateCurrentStep()) {
      if (this.currentStep === 5) {
        if (this.addAnotherVehicle === 'Yes') {
          this.vehicles.push({ ...this.currentVehicle });
          this.currentVehicle = {
            make: '',
            model: '',
            submodel: '',
            year: '',
            vin: '',
            coverage_type: '',
            garage: '',
            ownership: '',
            primary_use: '',
            annual_miles: '',
            currently_insured: '',
            current_insurer: '',
            current_expiry: '',
            length_insured: ''
          };
          this.addAnotherVehicle = '';
          this.currentStep = 1;
          this.logoUrl = 'assets/images/default.webp';
          this.formTitle = 'Get your Insurance on Wheel';
          this.availableModels = [];
          this.availableSubmodels = [];
          this.availableYears = [];
        } else if (this.addAnotherVehicle === 'No') {
            this.vehicles.push({ ...this.currentVehicle });
            this.currentStep = 6;
          }
        } else if (this.currentStep === 11) {
          this.drivers.push({ ...this.currentDriver });
          this.currentStep = 12;
        } else if (this.currentStep === 12) {
          if (this.addAnotherDriver === 'Yes') {
            this.currentDriver = {
              license_state: '',
              license_status: '',
              date_of_birth: '',
              marital_status: '',
              education: '',
              occupation: '',
              creditRating: '',
              currentResidence: '',
              yearsAtResidence: '',
              suspendedLicense: '',
              sr22: '',
              accidents_past_12_months: '',
              num_accidents: '',
              claims_past_12_months: '',
              num_claims: '',
              num_tickets: '',
              tickets_past_12_months: '',
              major_violations_past_12_months: '',
              num_major_violations: ''
            };
            this.addAnotherDriver = '';
            this.currentStep = 7;
          } else if (this.addAnotherDriver === 'No') {
            this.currentStep = 13;
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

  async validateCurrentStep(): Promise<boolean> {
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
      if (!this.currentVehicle.vin || this.currentVehicle.vin.length !== 17) {
        this.errors['vin'] = 'VIN must be exactly 17 characters.';
        valid = false;
      }
    } else if (this.currentStep === 2) {
      if (!this.currentVehicle.coverage_type) {
        this.errors['coverage_type'] = 'Please select a coverage type.';
        valid = false;
      }
      if (!this.currentVehicle.garage) {
        this.errors['garage'] = 'Please select where your car is parked.';
        valid = false;
      }
      if (!this.currentVehicle.ownership) {
        this.errors['ownership'] = 'Please select ownership type.';
        valid = false;
      }
    } else if (this.currentStep === 3) {
      if (!this.currentVehicle.primary_use) {
        this.errors['primary_use'] = 'Please select primary use of the vehicle.';
        valid = false;
      }
      if (!this.currentVehicle.annual_miles) {
        this.errors['annual_miles'] = 'Please select annual mileage.';
        valid = false;
      }
    } else if (this.currentStep === 4) {
      if (!this.currentVehicle.currently_insured) {
        this.errors['currently_insured'] = 'Please select if you are currently insured.';
        valid = false;
      }
      if (this.currentVehicle.currently_insured === 'Yes' && !this.currentVehicle.current_insurer) {
        this.errors['current_insurer'] = 'Please select your current insurer.';
        valid = false;
      }
      if (this.currentVehicle.currently_insured === 'Yes' && !this.currentVehicle.current_expiry) {
        this.errors['current_expiry'] = 'Please select your current insurance expiry date.';
        valid = false;
      }
      if (this.currentVehicle.currently_insured === 'Yes' && !this.currentVehicle.length_insured) {
        this.errors['length_insured'] = 'Please select how long you have been insured.';
        valid = false;
      }
    } else if (this.currentStep === 5) {
      if (!this.addAnotherVehicle) {
        this.errors['add_another'] = 'Please select yes or no.';
        valid = false;
      } else if (this.addAnotherVehicle === 'Yes' && this.vehicles.length >= 5) {
        this.errors['add_another'] = 'Maximum of 5 vehicles allowed.';
        valid = false;
      }
    } else if (this.currentStep === 6) {
      // No validation for summary step
    } else if (this.currentStep === 7) {
      if (!this.currentDriver.license_state) {
        this.errors['license_state'] = 'Please select a license state.';
        valid = false;
      }
      if (!this.currentDriver.license_status) {
        this.errors['license_status'] = 'Please select a license status.';
        valid = false;
      }
    } else if (this.currentStep === 8) {
      if (!this.currentDriver.date_of_birth) {
        this.errors['date_of_birth'] = 'Please enter your date of birth.';
        valid = false;
      } else {
        const dob = new Date(this.currentDriver.date_of_birth);
        if (isNaN(dob.getTime())) {
          this.errors['date_of_birth'] = 'Please enter a valid date of birth.';
          valid = false;
        } else {
          const today = new Date();
          const age = today.getFullYear() - dob.getFullYear() - ((today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) ? 1 : 0);
          if (age < 15) {
            this.errors['date_of_birth'] = 'You must be at least 15 years old.';
            valid = false;
          }
        }
      }
    } else if (this.currentStep === 9) {
      if (!this.currentDriver.marital_status) {
        this.errors['marital_status'] = 'Please select your marital status.';
        valid = false;
      }
      if (!this.currentDriver.education) {
        this.errors['education'] = 'Please select your education level.';
        valid = false;
      }
      if (!this.currentDriver.occupation) {
        this.errors['occupation'] = 'Please select your occupation.';
        valid = false;
      }
    } else if (this.currentStep === 10) {
      if (!this.currentDriver.creditRating) {
        this.errors['creditRating'] = 'Please select your credit rating.';
        valid = false;
      }
      if (!this.currentDriver.currentResidence) {
        this.errors['currentResidence'] = 'Please select your current residence.';
        valid = false;
      }
      if (!this.currentDriver.yearsAtResidence) {
        this.errors['yearsAtResidence'] = 'Please select years at residence.';
        valid = false;
      }
      if (!this.currentDriver.suspendedLicense) {
        this.errors['suspendedLicense'] = 'Please select if your license is suspended.';
        valid = false;
      }
      if (!this.currentDriver.sr22) {
        this.errors['sr22'] = 'Please select SR22 status.';
        valid = false;
      }
    } else if (this.currentStep === 11) {
      if (!this.currentDriver.accidents_past_12_months) {
        this.errors['accidents_past_12_months'] = 'Please select yes or no.';
        valid = false;
      } else if (this.currentDriver.accidents_past_12_months === 'Yes' && !this.currentDriver.num_accidents) {
        this.errors['num_accidents'] = 'Please select the number of accidents.';
        valid = false;
      }
      if (!this.currentDriver.claims_past_12_months) {
        this.errors['claims_past_12_months'] = 'Please select yes or no.';
        valid = false;
      } else if (this.currentDriver.claims_past_12_months === 'Yes' && !this.currentDriver.num_claims) {
        this.errors['num_claims'] = 'Please select the number of claims.';
        valid = false;
      }
    } else if (this.currentStep === 12) {
      if (!this.addAnotherDriver) {
        this.errors['add_another_driver'] = 'Please select yes or no.';
        valid = false;
      } else if (this.addAnotherDriver === 'Yes' && this.drivers.length >= 5) {
        this.errors['add_another_driver'] = 'Maximum of 5 drivers allowed.';
        valid = false;
      }
    } else if (this.currentStep === 14) {
      if (!this.first_name) {
        this.errors['first_name'] = 'Please enter your first name.';
        valid = false;
      }
      if (!this.last_name) {
        this.errors['last_name'] = 'Please enter your last name.';
        valid = false;
      }
    } else if (this.currentStep === 15) {
      if (!this.email) {
        this.errors['email'] = 'Please enter your email.';
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors['email'] = 'Please enter a valid email address.';
        valid = false;
      }
      if (!this.phone) {
        this.errors['phone'] = 'Please enter your phone number.';
        valid = false;
      } else if (this.phone.length !== 10 || !/^\d{10}$/.test(this.phone)) {
        this.errors['phone'] = 'Phone number must be 10 digits.';
        valid = false;
      } else {
        const area = parseInt(this.phone.substring(0, 3));
        if (!this.areaCodesUS.includes(area)) {
          this.errors['phone'] = 'Invalid area code.';
          valid = false;
        }
      }
      if (valid && this.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        // Check domain at the end
        const domain = this.email.split('@')[1];
        try {
          const res: any = await this.http.get(`https://8.8.8.8/resolve?name=${domain}`).toPromise();
          if (res.Status === 3) {
            this.errors['email'] = 'Invalid email domain.';
            valid = false;
          }
        } catch (e) {
          this.errors['email'] = 'Unable to validate email domain.';
          valid = false;
        }
      }
    } else if (this.currentStep === 16) {
      if (!this.state) {
        this.errors['state'] = 'Please select a state.';
        valid = false;
      }
      if (!this.zip) {
        this.errors['zip'] = 'Please enter a zip code.';
        valid = false;
      } else if (this.zip.length !== 5 || !/^\d{5}$/.test(this.zip)) {
        this.errors['zip'] = 'Zip code must be exactly 5 digits.';
        valid = false;
      }
    } else if (this.currentStep === 17) {
      if (!this.city) {
        this.errors['city'] = 'Please enter your city.';
        valid = false;
      }
      if (!this.street_address) {
        this.errors['street_address'] = 'Please enter your street address.';
        valid = false;
      }
    } else if (this.currentStep === 18) {
      if (!this.agreement) {
        this.errors['agreement'] = 'You must agree to the terms and conditions.';
        valid = false;
      }
    } else if (this.currentStep === 18) {
      if (!this.tickets_past_12_months) {
        this.errors['tickets_past_12_months'] = 'Please select yes or no.';
        valid = false;
      } else if (this.tickets_past_12_months === 'Yes' && !this.num_tickets) {
        this.errors['num_tickets'] = 'Please select the number of tickets.';
        valid = false;
      }
      if (!this.major_violations_past_12_months) {
        this.errors['major_violations_past_12_months'] = 'Please select yes or no.';
        valid = false;
      } else if (this.major_violations_past_12_months === 'Yes' && !this.num_major_violations) {
        this.errors['num_major_violations'] = 'Please select the number of major violations.';
        valid = false;
      }
    }
    return valid;
  }


  async submit() {
    this.errors = {};
    if (await this.validateCurrentStep()) {
      this.isSubmitting = true;

      // Read values from DOM
      this.universalLeadid = (document.getElementById('leadid_token') as HTMLInputElement)?.value || '';
      this.xxTrustedFormCertUrl = (document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement)?.value || '';

      const coverageTypeMap = { 'Preferred': 1, 'Premium': 2, 'Standard': 3, 'State Minimum': 4 };
      const garageMap = { 'Car Port': 1, 'Full Garage': 2, 'No Cover': 3, 'On Street': 4 };
      const ownershipMap = { 'Own': 1, 'Lease': 2, 'Finance': 3 };
      const annualMilesMap = { 'Under 5,000': 1, '5,001 - 10,000': 2, '10,001 - 15,000': 3, '15,000+': 4 };
      const primaryUseMap = { 'Business': 1, 'Commute School': 2, 'Commute Varies': 3, 'Commute Work': 4, 'Pleasure': 5 };
      const maritalStatusMap = { 'Single': 1, 'Married': 2, 'Divorced': 3, 'Separated': 4, 'Widowed': 5, 'Domestic Partner': 6 };
      const educationMap = { 'High School Diploma': 1, 'Associate Degree': 2, 'BS': 3, 'MS': 4, 'Some College': 5, 'Some or no High School': 6, 'Less than High School': 7 };
      const licenseStatusMap = { 'Active': 1, 'International': 2, 'Learner': 3, 'Probation': 4, 'Restricted': 5, 'Suspended': 6, 'Temporary': 7 };
      const yesNoMap = { 'Yes': 1, 'No': 2 };

      const payload: any = {
        firstName: this.first_name,
        lastName: this.last_name,
        address: this.street_address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        email: this.email,
        phone: this.phone,
        agreement: this.agreement ? 1 : 2,
        ipaddress: this.ipaddress,
        universalLeadid: this.universalLeadid,
        xxTrustedFormCertUrl: this.xxTrustedFormCertUrl,
        aff_id: this.aff_id,
        transaction_id: this.transaction_id,
        sub_aff_id: this.sub_aff_id,
        url: window.location.href,
        browser: navigator.userAgent,
        TcpaText: 'By clicking GET YOUR QUOTE, I agree to the Terms of Service and Privacy Policy, I authorize auto insurance companies, their contractors, and Partner Companies to contact me about auto insurance offers by phone calls and text messages to the number I provided. I authorize that these marketing communications may be delivered to me using an automatic telephone dialing system or by prerecorded message. I understand that my consent is not a condition of purchase, and I may revoke that consent at any time. Mobile and data charges may apply. California Residents.',
        formType: 'auto_insurance'
      };

      this.vehicles.forEach((vehicle, index) => {
        const suffix = index + 1;
        payload[`make${suffix}`] = vehicle.make;
        payload[`model${suffix}`] = vehicle.model;
        payload[`submodel${suffix}`] = vehicle.submodel;
        payload[`year${suffix}`] = vehicle.year;
        payload[`coverage_type${suffix}`] = coverageTypeMap[vehicle.coverage_type as keyof typeof coverageTypeMap] || vehicle.coverage_type;
        payload[`garage${suffix}`] = garageMap[vehicle.garage as keyof typeof garageMap] || vehicle.garage;
        payload[`ownership${suffix}`] = ownershipMap[vehicle.ownership as keyof typeof ownershipMap] || vehicle.ownership;
        payload[`primary_use${suffix}`] = primaryUseMap[vehicle.primary_use as keyof typeof primaryUseMap] || vehicle.primary_use;
        payload[`annual_miles${suffix}`] = annualMilesMap[vehicle.annual_miles as keyof typeof annualMilesMap] || vehicle.annual_miles;
        payload[`currently_insured${suffix}`] = yesNoMap[vehicle.currently_insured as keyof typeof yesNoMap] || vehicle.currently_insured;
      });

      this.drivers.forEach((driver, index) => {
        const suffix = index + 1;
        payload[`license_state${suffix}`] = driver.license_state;
        payload[`license_status${suffix}`] = licenseStatusMap[driver.license_status as keyof typeof licenseStatusMap] || driver.license_status;
        payload[`date_of_birth${suffix}`] = driver.date_of_birth;
        payload[`marital_status${suffix}`] = maritalStatusMap[driver.marital_status as keyof typeof maritalStatusMap] || driver.marital_status;
        payload[`education${suffix}`] = educationMap[driver.education as keyof typeof educationMap] || driver.education;
        payload[`occupation${suffix}`] = driver.occupation;
        payload[`creditRating${suffix}`] = driver.creditRating;
        payload[`currentResidence${suffix}`] = driver.currentResidence;
        payload[`yearsAtResidence${suffix}`] = driver.yearsAtResidence;
        payload[`suspendedLicense${suffix}`] = driver.suspendedLicense;
        payload[`sr22${suffix}`] = driver.sr22;
        payload[`accidents_past_12_months${suffix}`] = yesNoMap[driver.accidents_past_12_months as keyof typeof yesNoMap] || driver.accidents_past_12_months;
        payload[`num_accidents${suffix}`] = driver.accidents_past_12_months === 'No' ? 0 : driver.num_accidents;
        payload[`claims_past_12_months${suffix}`] = yesNoMap[driver.claims_past_12_months as keyof typeof yesNoMap] || driver.claims_past_12_months;
        payload[`num_claims${suffix}`] = driver.claims_past_12_months === 'No' ? 0 : driver.num_claims;
        payload[`tickets_past_12_months${suffix}`] = yesNoMap[driver.tickets_past_12_months as keyof typeof yesNoMap] || driver.tickets_past_12_months;
        payload[`num_tickets${suffix}`] = driver.tickets_past_12_months === 'No' ? 0 : driver.num_tickets;
        payload[`major_violations_past_12_months${suffix}`] = yesNoMap[driver.major_violations_past_12_months as keyof typeof yesNoMap] || driver.major_violations_past_12_months;
        payload[`num_major_violations${suffix}`] = driver.major_violations_past_12_months === 'No' ? 0 : driver.num_major_violations;
      });

      
      this.http.post('https://insuranceonwheel.com/server/forward-lead', payload).subscribe({
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
      // Retry injection after 2 seconds on error
      setTimeout(() => {
        this.trustedFormInjected = false;
        this.injectTrustedForm();
      }, 2000);
    }
  }
  onFirstNameInput() {
    this.first_name = this.first_name.replace(/[^a-zA-Z\s]/g, '');
  }

  onLastNameInput() {
    this.last_name = this.last_name.replace(/[^a-zA-Z\s]/g, '');
  }

  onZipInput() {
    this.zip = this.zip.replace(/[^0-9]/g, '');
  }

  onPhoneInput() {
    this.phone = this.phone.replace(/[^0-9]/g, '');
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