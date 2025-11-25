import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 9;
  make: string = '';
  model: string = '';
  submodel: string = '';
  year: string = '';
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

  makes = [
    'Acura', 'Alfa Romeo', 'American General', 'American Motors', 'Aro', 'Aston Martin', 'Audi', 'Automobili Pininfarina', 'Avanti', 'Azure Dynamics', 'Bentley', 'BMW', 'Brightdrop', 'Bugatti', 'Bugatti Rimac', 'Buick', 'Byd', 'Cadillac', 'Chevrolet', 'Chrysler', 'Daewoo', 'Daihatsu', 'Datsun', 'Dodge', 'Eagle', 'Ferrari', 'Fiat', 'Fisker Automotive', 'Fisker Inc.', 'Ford', 'Freightliner', 'Genesis', 'Geo', 'Global Electric Motors', 'Gm Ev1', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Ineos Automotive Limited', 'Infiniti', 'International', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'Karma Automotive', 'Kia', 'Laforza', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lincoln', 'Lordstown Ev Corporation', 'Lotus', 'Lucid Motors', 'Mahindra And Mahindra', 'Maserati', 'Maybach', 'Mazda', 'Mclaren Automotive', 'Mercedes-Benz', 'Mercury', 'Merkur', 'Mini', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Peugeot', 'Plymouth', 'Polestar', 'Pontiac', 'Porsche', 'Ram', 'Renault', 'Rivian', 'Rolls-Royce', 'Saab', 'Saturn', 'Smart', 'Spartan Motors', 'Sprinter', 'Sterling', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Triumph Car', 'Tvr', 'Vinfast Trading And Production Llc', 'Volkswagen', 'Volvo', 'Yugo', 'Zeekr'
  ];
  models: { [key: string]: string[] } = {
    'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tacoma'],
    'Acura': ['TLX', 'RDX', 'MDX', 'ILX'],
    'Alfa Romeo': ['Giulia', 'Stelvio', 'Tonale'],
    'American General': ['Other'],
    'American Motors': ['Jeep', 'Eagle'],
    'Aro': ['Other'],
    'Aston Martin': ['DB11', 'Vantage', 'DBS'],
    'Audi': ['A3', 'A4', 'Q5', 'Q7'],
    'Automobili Pininfarina': ['Other'],
    'Avanti': ['Other'],
    'Azure Dynamics': ['Transit Connect'],
    'Bentley': ['Continental GT', 'Bentayga', 'Flying Spur'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5'],
    'Brightdrop': ['Other'],
    'Bugatti': ['Chiron', 'Divo'],
    'Bugatti Rimac': ['Other'],
    'Buick': ['Enclave', 'Encore', 'Regal'],
    'Byd': ['Other'],
    'Cadillac': ['Escalade', 'XT5', 'CT5'],
    'Chevrolet': ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Camaro'],
    'Chrysler': ['300', 'Pacifica', 'Voyager'],
    'Daewoo': ['Nubira', 'Leganza'],
    'Daihatsu': ['Charade', 'Mira'],
    'Datsun': ['Go', 'Redi-Go'],
    'Dodge': ['Charger', 'Durango', 'Journey'],
    'Eagle': ['Talon', 'Vision'],
    'Ferrari': ['488', 'Portofino', 'Roma'],
    'Fiat': ['500', 'Panda', 'Tipo'],
    'Fisker Automotive': ['Ocean'],
    'Fisker Inc.': ['Ocean'],
    'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Focus'],
    'Freightliner': ['Sprinter'],
    'Genesis': ['G70', 'G80', 'GV70'],
    'Geo': ['Metro', 'Prizm'],
    'Global Electric Motors': ['Other'],
    'Gm Ev1': ['EV1'],
    'GMC': ['Sierra', 'Yukon', 'Terrain'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
    'Hummer': ['H2', 'H3'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'],
    'Ineos Automotive Limited': ['Grenadier'],
    'Infiniti': ['Q50', 'QX60', 'QX80'],
    'International': ['Other'],
    'Isuzu': ['Rodeo', 'Trooper'],
    'Iveco': ['Other'],
    'Jaguar': ['F-Pace', 'XE', 'XF'],
    'Jeep': ['Grand Cherokee', 'Wrangler', 'Cherokee'],
    'Karma Automotive': ['Revero'],
    'Kia': ['Optima', 'Sportage', 'Sorento', 'Telluride'],
    'Laforza': ['Other'],
    'Lamborghini': ['Huracan', 'Urus', 'Aventador'],
    'Lancia': ['Ypsilon', 'Delta'],
    'Land Rover': ['Range Rover', 'Discovery', 'Defender'],
    'Lexus': ['RX', 'ES', 'GX'],
    'Lincoln': ['Navigator', 'Aviator', 'Corsair'],
    'Lordstown Ev Corporation': ['Endurance'],
    'Lotus': ['Evora', 'Elise'],
    'Lucid Motors': ['Air'],
    'Mahindra And Mahindra': ['Scorpio', 'Bolero'],
    'Maserati': ['Ghibli', 'Levante', 'Quattroporte'],
    'Maybach': ['S-Class', 'GLS'],
    'Mazda': ['Mazda3', 'Mazda6', 'CX-5'],
    'Mclaren Automotive': ['720S', '570S'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
    'Mercury': ['Grand Marquis', 'Mountaineer'],
    'Merkur': ['XR4Ti'],
    'Mini': ['Cooper', 'Countryman'],
    'Mitsubishi': ['Outlander', 'Eclipse Cross', 'Mirage'],
    'Nissan': ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Titan'],
    'Oldsmobile': ['Alero', 'Silhouette'],
    'Peugeot': ['208', '308', '3008'],
    'Plymouth': ['Voyager', 'Acclaim'],
    'Polestar': ['2', '3'],
    'Pontiac': ['Grand Prix', 'G6'],
    'Porsche': ['911', 'Cayenne', 'Macan'],
    'Ram': ['1500', '2500', '3500'],
    'Renault': ['Clio', 'Megane', 'Captur'],
    'Rivian': ['R1T', 'R1S'],
    'Rolls-Royce': ['Ghost', 'Dawn', 'Cullinan'],
    'Saab': ['9-3', '9-5'],
    'Saturn': ['Ion', 'Vue'],
    'Smart': ['Fortwo', 'Forfour'],
    'Spartan Motors': ['Other'],
    'Sprinter': ['Other'],
    'Sterling': ['Other'],
    'Subaru': ['Outback', 'Forester', 'Impreza'],
    'Suzuki': ['Swift', 'Vitara', 'Jimny'],
    'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X'],
    'Triumph Car': ['Other'],
    'Tvr': ['Cerbera', 'Tuscan'],
    'Vinfast Trading And Production Llc': ['VF 8', 'VF 9'],
    'Volkswagen': ['Jetta', 'Passat', 'Tiguan', 'Atlas'],
    'Volvo': ['XC60', 'XC90', 'S60'],
    'Yugo': ['GV', 'Tempo'],
    'Zeekr': ['001', '009']
  };
  submodels: { [key: string]: string[] } = {
    'Toyota Camry': ['LE', 'SE', 'XLE', 'XSE'],
    'Toyota Corolla': ['L', 'LE', 'S', 'SE'],
    'Toyota RAV4': ['LE', 'XLE', 'Adventure', 'TRD Off Road'],
    'Toyota Highlander': ['LE', 'XLE', 'Limited', 'Platinum'],
    'Toyota Prius': ['L', 'LE', 'XLE'],
    'Toyota Tacoma': ['SR', 'SR5', 'TRD Off Road'],
    'Acura TLX': ['Base', 'Technology', 'Advance'],
    'Acura RDX': ['Base', 'Technology', 'Advance'],
    'Acura MDX': ['Base', 'Technology', 'Advance'],
    'Acura ILX': ['Base', 'Technology'],
    'Alfa Romeo Giulia': ['Base', 'Ti'],
    'Alfa Romeo Stelvio': ['Base', 'Ti'],
    'Alfa Romeo Tonale': ['Base', 'Ti'],
    'American General Other': ['Base'],
    'American Motors Jeep': ['Base'],
    'American Motors Eagle': ['Base'],
    'Aro Other': ['Base'],
    'Aston Martin DB11': ['Base', 'AMR'],
    'Aston Martin Vantage': ['Base', 'AMR'],
    'Aston Martin DBS': ['Base'],
    'Audi A3': ['Premium', 'Prestige'],
    'Audi A4': ['Premium', 'Prestige'],
    'Audi Q5': ['Premium', 'Prestige'],
    'Audi Q7': ['Premium', 'Prestige'],
    'Automobili Pininfarina Other': ['Base'],
    'Avanti Other': ['Base'],
    'Azure Dynamics Transit Connect': ['Base'],
    'Bentley Continental GT': ['Base', 'Speed'],
    'Bentley Bentayga': ['Base', 'Speed'],
    'Bentley Flying Spur': ['Base'],
    'BMW 3 Series': ['330i', '340i'],
    'BMW 5 Series': ['530i', '540i'],
    'BMW X3': ['xDrive30i'],
    'BMW X5': ['xDrive40i'],
    'Brightdrop Other': ['Base'],
    'Bugatti Chiron': ['Base'],
    'Bugatti Divo': ['Base'],
    'Bugatti Rimac Other': ['Base'],
    'Buick Enclave': ['Essence', 'Preferred'],
    'Buick Encore': ['Preferred'],
    'Buick Regal': ['Preferred'],
    'Byd': ['Base'],
    'Cadillac Escalade': ['Luxury', 'Platinum'],
    'Cadillac XT5': ['Luxury', 'Platinum'],
    'Cadillac CT5': ['Luxury', 'Platinum'],
    'Chevrolet Silverado': ['WT', 'LT', 'LTZ', 'High Country'],
    'Chevrolet Malibu': ['LS', 'LT', 'Premier'],
    'Chevrolet Equinox': ['LS', 'LT', 'Premier'],
    'Chevrolet Tahoe': ['LS', 'LT', 'Premier', 'High Country'],
    'Chevrolet Camaro': ['LS', 'LT', 'SS'],
    'Chrysler 300': ['Touring', 'Limited'],
    'Chrysler Pacifica': ['Touring', 'Limited'],
    'Chrysler Voyager': ['LX', 'LXi'],
    'Daewoo Nubira': ['Base'],
    'Daewoo Leganza': ['Base'],
    'Daihatsu Charade': ['Base'],
    'Daihatsu Mira': ['Base'],
    'Datsun Go': ['Base'],
    'Datsun Redi-Go': ['Base'],
    'Dodge Charger': ['SXT', 'R/T'],
    'Dodge Durango': ['SXT', 'GT'],
    'Dodge Journey': ['SE', 'SXT'],
    'Eagle Talon': ['Base'],
    'Eagle Vision': ['Base'],
    'Ferrari 488': ['Spider', 'GTB'],
    'Ferrari Portofino': ['Base'],
    'Ferrari Roma': ['Base'],
    'Fiat 500': ['Pop', 'Lounge'],
    'Fiat Panda': ['Base'],
    'Fiat Tipo': ['Base'],
    'Fisker Automotive Ocean': ['Base'],
    'Fisker Inc. Ocean': ['Base'],
    'Ford F-150': ['XL', 'XLT', 'Lariat', 'Platinum'],
    'Ford Mustang': ['EcoBoost', 'GT', 'Shelby GT350', 'Shelby GT500'],
    'Ford Explorer': ['Base', 'XLT', 'Limited', 'Platinum'],
    'Ford Escape': ['S', 'SE', 'SEL', 'Titanium'],
    'Ford Focus': ['S', 'SE', 'Titanium'],
    'Freightliner Sprinter': ['Base'],
    'Genesis G70': ['Base', 'Advanced'],
    'Genesis G80': ['Base', 'Advanced'],
    'Genesis GV70': ['Base', 'Advanced'],
    'Geo Metro': ['Base'],
    'Geo Prizm': ['Base'],
    'Global Electric Motors Other': ['Base'],
    'Gm Ev1 EV1': ['Base'],
    'GMC Sierra': ['Base', 'SLE', 'SLT'],
    'GMC Yukon': ['SLE', 'SLT', 'Denali'],
    'GMC Terrain': ['SLE', 'SLT'],
    'Honda Civic': ['LX', 'Sport', 'EX', 'Touring'],
    'Honda Accord': ['LX', 'Sport', 'EX', 'Touring'],
    'Honda CR-V': ['LX', 'EX', 'EX-L', 'Touring'],
    'Honda Pilot': ['LX', 'EX', 'EX-L', 'Touring'],
    'Honda Fit': ['LX', 'Sport', 'EX'],
    'Hummer H2': ['Base'],
    'Hummer H3': ['Base'],
    'Hyundai Elantra': ['SE', 'SEL', 'Limited'],
    'Hyundai Sonata': ['SE', 'SEL', 'Limited'],
    'Hyundai Tucson': ['SE', 'SEL', 'Limited'],
    'Hyundai Santa Fe': ['SE', 'SEL', 'Limited'],
    'Ineos Automotive Limited Grenadier': ['Base'],
    'Infiniti Q50': ['Base', 'Red Sport'],
    'Infiniti QX60': ['Base', 'Red Sport'],
    'Infiniti QX80': ['Base'],
    'International Other': ['Base'],
    'Isuzu Rodeo': ['Base'],
    'Isuzu Trooper': ['Base'],
    'Iveco Other': ['Base'],
    'Jaguar F-Pace': ['Base', 'S', 'Prestige'],
    'Jaguar XE': ['Base', 'Prestige'],
    'Jaguar XF': ['Base', 'Prestige'],
    'Jeep Grand Cherokee': ['Laredo', 'Limited', 'Overland'],
    'Jeep Wrangler': ['Sport', 'Sahara', 'Rubicon'],
    'Jeep Cherokee': ['Latitude', 'Limited', 'Trailhawk'],
    'Karma Automotive Revero': ['Base'],
    'Kia Optima': ['LX', 'EX', 'SX'],
    'Kia Sportage': ['LX', 'EX', 'SX'],
    'Kia Sorento': ['LX', 'EX', 'SX'],
    'Kia Telluride': ['LX', 'EX', 'SX'],
    'Laforza Other': ['Base'],
    'Lamborghini Huracan': ['LP580-2', 'LP610-4'],
    'Lamborghini Urus': ['Base'],
    'Lamborghini Aventador': ['LP700-4', 'LP750-4'],
    'Lancia Ypsilon': ['Base'],
    'Lancia Delta': ['Base'],
    'Land Rover Range Rover': ['Base', 'Autobiography'],
    'Land Rover Discovery': ['Base', 'HSE'],
    'Land Rover Defender': ['Base', 'X'],
    'Lexus RX': ['Base', 'F Sport'],
    'Lexus ES': ['Base', 'Ultra Luxury'],
    'Lexus GX': ['Base', 'Premium'],
    'Lincoln Navigator': ['Base', 'Reserve'],
    'Lincoln Aviator': ['Base', 'Reserve'],
    'Lincoln Corsair': ['Base', 'Reserve'],
    'Lordstown Ev Corporation Endurance': ['Base'],
    'Lotus Evora': ['Base'],
    'Lotus Elise': ['Base'],
    'Lucid Motors Air': ['Base'],
    'Mahindra And Mahindra Scorpio': ['Base'],
    'Mahindra And Mahindra Bolero': ['Base'],
    'Maserati Ghibli': ['Base', 'S'],
    'Maserati Levante': ['Base', 'S'],
    'Maserati Quattroporte': ['Base', 'S'],
    'Maybach S-Class': ['Base'],
    'Maybach GLS': ['Base'],
    'Mazda Mazda3': ['Base', 'Premium', 'Turbo'],
    'Mazda Mazda6': ['Base', 'Grand Touring'],
    'Mazda CX-5': ['Base', 'Grand Touring'],
    'Mclaren Automotive 720S': ['Base'],
    'Mclaren Automotive 570S': ['Base'],
    'Mercedes-Benz C-Class': ['C300', 'C400'],
    'Mercedes-Benz E-Class': ['E300', 'E400'],
    'Mercedes-Benz GLC': ['GLC300'],
    'Mercedes-Benz GLE': ['GLE350'],
    'Mercury Grand Marquis': ['Base'],
    'Mercury Mountaineer': ['Base'],
    'Merkur XR4Ti': ['Base'],
    'Mini Cooper': ['Base', 'S'],
    'Mini Countryman': ['Base', 'S'],
    'Mitsubishi Outlander': ['ES', 'SE', 'SEL'],
    'Mitsubishi Eclipse Cross': ['ES', 'SE', 'SEL'],
    'Mitsubishi Mirage': ['ES', 'SE'],
    'Nissan Altima': ['S', 'SV', 'SL', 'Platinum'],
    'Nissan Sentra': ['S', 'SV', 'SR', 'Nismo'],
    'Nissan Rogue': ['S', 'SV', 'SL', 'Platinum'],
    'Nissan Pathfinder': ['S', 'SV', 'SL', 'Platinum'],
    'Nissan Titan': ['S', 'SV', 'Pro-4X'],
    'Oldsmobile Alero': ['Base'],
    'Oldsmobile Silhouette': ['Base'],
    'Peugeot 208': ['Base', 'Allure'],
    'Peugeot 308': ['Base', 'Allure'],
    'Peugeot 3008': ['Base', 'Allure'],
    'Plymouth Voyager': ['Base'],
    'Plymouth Acclaim': ['Base'],
    'Polestar 2': ['Base'],
    'Polestar 3': ['Base'],
    'Pontiac Grand Prix': ['Base'],
    'Pontiac G6': ['Base'],
    'Porsche 911': ['Carrera', 'Turbo'],
    'Porsche Cayenne': ['Base', 'Turbo'],
    'Porsche Macan': ['Base', 'Turbo'],
    'Ram 1500': ['Tradesman', 'Big Horn'],
    'Ram 2500': ['Tradesman', 'Big Horn'],
    'Ram 3500': ['Tradesman', 'Big Horn'],
    'Renault Clio': ['Base'],
    'Renault Megane': ['Base'],
    'Renault Captur': ['Base'],
    'Rivian R1T': ['Base'],
    'Rivian R1S': ['Base'],
    'Rolls-Royce Ghost': ['Base'],
    'Rolls-Royce Dawn': ['Base'],
    'Rolls-Royce Cullinan': ['Base'],
    'Saab 9-3': ['Base'],
    'Saab 9-5': ['Base'],
    'Saturn Ion': ['Base'],
    'Saturn Vue': ['Base'],
    'Smart Fortwo': ['Base'],
    'Smart Forfour': ['Base'],
    'Spartan Motors Other': ['Base'],
    'Sprinter Other': ['Base'],
    'Sterling Other': ['Base'],
    'Subaru Outback': ['Base', 'Limited'],
    'Subaru Forester': ['Base', 'Premium'],
    'Subaru Impreza': ['Base', 'Premium'],
    'Suzuki Swift': ['Base'],
    'Suzuki Vitara': ['Base'],
    'Suzuki Jimny': ['Base'],
    'Tesla Model 3': ['Standard Range', 'Long Range'],
    'Tesla Model Y': ['Long Range', 'Performance'],
    'Tesla Model S': ['Long Range', 'Plaid'],
    'Tesla Model X': ['Long Range', 'Plaid'],
    'Triumph Car Other': ['Base'],
    'Tvr Cerbera': ['Base'],
    'Tvr Tuscan': ['Base'],
    'Vinfast Trading And Production Llc VF 8': ['Base'],
    'Vinfast Trading And Production Llc VF 9': ['Base'],
    'Volkswagen Jetta': ['S', 'SE', 'SEL'],
    'Volkswagen Passat': ['S', 'SE', 'SEL'],
    'Volkswagen Tiguan': ['S', 'SE', 'SEL'],
    'Volkswagen Atlas': ['S', 'SE', 'SEL'],
    'Volvo XC60': ['T5', 'T6'],
    'Volvo XC90': ['T5', 'T6'],
    'Volvo S60': ['T5', 'T6'],
    'Yugo GV': ['Base'],
    'Yugo Tempo': ['Base'],
    'Zeekr 001': ['Base'],
    'Zeekr 009': ['Base']
  };
  availableModels: string[] = [];
  availableSubmodels: string[] = [];
  years: string[] = [];


  errors: { [key: string]: string } = {};

  constructor(private http: HttpClient, private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.fetchIPAddress();
    this.parseUrlParams();
    this.injectTrustedFormPing();
    // Start injecting TrustedForm and LeadID immediately on load
    this.injectTrustedForm();
    // Start trying LeadiD injection after 10s; then retry every 2s until success or submit
    setTimeout(() => this.startLeadiDInjectionLoop(), 10000);
    this.populateYears();
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1886; year--) {
      this.years.push(year.toString());
    }
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
    this.model = '';
    this.submodel = '';
    this.availableModels = this.models[this.make] || [];
    this.availableSubmodels = [];
    if (this.make) {
      this.logoUrl = 'assets/images/' + this.make.toLowerCase().replace(/\s+/g, '-') + '.webp';
      this.formTitle = 'Get your ' + this.make + ' Insurance Quote';
    } else {
      this.logoUrl = 'assets/images/default.webp';
      this.formTitle = 'Get your auto insurance quote';
    }
  }

  onModelChange() {
    this.submodel = '';
    this.availableSubmodels = this.submodels[this.make + ' ' + this.model] || [];
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
      if (this.currentStep < this.totalSteps) {
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
      if (!this.make) {
        this.errors['make'] = 'Please select a car make.';
        valid = false;
      }
      if (!this.model) {
        this.errors['model'] = 'Please select a car model.';
        valid = false;
      }
      if (!this.submodel) {
        this.errors['submodel'] = 'Please select a car submodel.';
        valid = false;
      }
      if (!this.year) {
        this.errors['year'] = 'Please select a car year.';
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
        make: this.make,
        model: this.model,
        submodel: this.submodel,
        year: this.year,
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