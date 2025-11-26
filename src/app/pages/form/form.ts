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
    'Acura', 'Alfa Romeo', 'American General', 'American Motors', 'Aro', 'Aston Martin', 'Audi', 'Automobili Pininfarina', 'Avanti', 'Azure Dynamics', 'Bentley', 'BMW', 'Brightdrop', 'Bugatti', 'Buick', 'Byd', 'Cadillac', 'Chevrolet', 'Chrysler', 'Daewoo', 'Daihatsu', 'Datsun', 'Dodge', 'Eagle', 'Ferrari', 'Fiat', 'Fisker', 'Ford', 'Freightliner', 'Genesis', 'Geo', 'GEM', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Ineos', 'Infiniti', 'International', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'Karma', 'Kia', 'Laforza', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lincoln', 'Lordstown', 'Lotus', 'Lucid', 'Mahindra', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mercury', 'Merkur', 'Mini', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Peugeot', 'Plymouth', 'Polestar', 'Pontiac', 'Porsche', 'Ram', 'Renault', 'Rivian', 'Rolls-Royce', 'Saab', 'Saturn', 'Smart', 'Spartan', 'Sterling', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Triumph', 'Tvr', 'Vinfast', 'Volkswagen', 'Volvo', 'Yugo', 'Zeekr'
  ];
  models: { [key: string]: string[] } = {
    'Acura': ['TLX', 'RDX', 'MDX', 'ILX', 'Integra', 'NSX', 'TL', 'RL', 'RLX', 'CSX', 'ZDX', 'Legend', 'Vigor', 'EL'],
    'Alfa Romeo': ['Giulia', 'Stelvio', 'Tonale', '4C', 'GTV', 'Spider', 'MiTo', '159', 'Brera', 'Giulietta', 'GT', 'SZ', 'RZ'],
    'American General': ['HMMWV / Humvee', 'Hummer H1', 'Hummer H2', 'M35 truck series', 'M939 truck series', 'Military trucks & tactical vehicles', 'Commercial vans / utility vehicles'],
    'American Motors': ['Javelin', 'AMX', 'Gremlin', 'Hornet', 'Concord', 'Spirit', 'Eagle', 'Matador', 'Rebel', 'Ambassador', 'Marlin', 'Pacer'],
    'ARO': ['IMS series', 'ARO 24 Series', 'ARO 10 Series'],
    'Aston Martin': ['Vantage', 'DB11', 'DB9', 'DBX', 'Rapide', 'Vanquish', 'Valhalla', 'Valhalla Roadster', 'Valkyrie', 'Valkyrie AMR Pro', 'Cygnet', 'One-77', 'Lagonda'],
    'Audi': ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q4', 'Q5', 'Q7', 'Q8', 'TT', 'TTS', 'R8', 'e-tron', 'RS models', 'S models'],
    'Automobili Pininfarina': ['Pininfarina Battista', 'Pininfarina B95'],
    'Avanti': ['Avanti (original)', 'Avanti II', 'Avanti (post‑II)', 'Avanti Convertible', 'Avanti Long‑Wheelbase Coupe', 'Avanti 4‑Door Sedan', 'Studebaker XUV', 'SVO Lister'],
    'Azure Dynamics': ['Transit Connect Electric', 'Balance Hybrid Electric', 'Force Drive Electric (powertrain deployment)'],
    'Bentley': ['Continental', 'Flying Spur', 'Bentayga', 'Mulsanne', 'Arnage', 'Azure', 'Brooklands', 'Turbo R', 'Eight', 'EXP series'],
    'BMW': ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series','X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'i7', 'iX', 'iX3', 'M Series'],
    'BrightDrop': ['BrightDrop 400', 'BrightDrop 600'],
    'Bugatti': ['Veyron', 'Chiron', 'Divo', 'Centodieci', 'La Voiture Noire', 'Bolide', 'EB110', 'Type 35', 'Type 41 Royale', 'Type 57', 'Type 55', 'Type 13', 'Type 18', 'Type 23'],
    'Buick': ['Enclave', 'Envision', 'Encore', 'Encore GX', 'Regal', 'Regal TourX', 'LaCrosse', 'Verano', 'Riviera', 'Century', 'Skylark', 'Electra', 'Roadmaster'],
    'BYD': ['Tang', 'Song', 'Han', 'Yuan', 'Dolphin', 'Seal', 'Atto 3', 'Qin', 'F0', 'F3', 'F6', 'e6', 'S2', 'e1', 'M3', 'T3'],
    'Cadillac': ['CT4', 'CT5', 'CT6', 'CTS', 'ATS', 'XTS', 'Escalade', 'XT4', 'XT5', 'XT6', 'SRX', 'ELR', 'DTS', 'Seville', 'Eldorado', 'DeVille', 'Fleetwood', 'Brougham'],
    'Chevrolet': ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Camaro'],
    'Chrysler': ['300', 'Pacifica', 'Voyager'],
    'Daewoo': ['Nubira', 'Leganza'],
    'Daihatsu': ['Charade', 'Mira'],
    'Datsun': ['Go', 'Redi-Go'],
    'Dodge': ['Charger', 'Durango', 'Journey'],
    'Eagle': ['Talon', 'Vision'],
    'Ferrari': ['488', 'Portofino', 'Roma'],
    'Fiat': ['500', 'Panda', 'Tipo'],
    'Fisker': ['Ocean'],
    'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Focus'],
    'Freightliner': ['Sprinter'],
    'Genesis': ['G70', 'G80', 'GV70'],
    'Geo': ['Metro', 'Prizm'],
    'GEM': ['Other'],
    'GMC': ['Sierra', 'Yukon', 'Terrain'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
    'Hummer': ['H2', 'H3'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'],
    'Ineos': ['Grenadier'],
    'Infiniti': ['Q50', 'QX60', 'QX80'],
    'International': ['Other'],
    'Isuzu': ['Rodeo', 'Trooper'],
    'Iveco': ['Other'],
    'Jaguar': ['F-Pace', 'XE', 'XF'],
    'Jeep': ['Grand Cherokee', 'Wrangler', 'Cherokee'],
    'Karma': ['Revero'],
    'Kia': ['Optima', 'Sportage', 'Sorento', 'Telluride'],
    'Laforza': ['Other'],
    'Lamborghini': ['Huracan', 'Urus', 'Aventador'],
    'Lancia': ['Ypsilon', 'Delta'],
    'Land Rover': ['Range Rover', 'Discovery', 'Defender'],
    'Lexus': ['RX', 'ES', 'GX'],
    'Lincoln': ['Navigator', 'Aviator', 'Corsair'],
    'Lordstown': ['Endurance'],
    'Lotus': ['Evora', 'Elise'],
    'Lucid': ['Air'],
    'Mahindra': ['Scorpio', 'Bolero'],
    'Maserati': ['Ghibli', 'Levante', 'Quattroporte'],
    'Maybach': ['S-Class', 'GLS'],
    'Mazda': ['Mazda3', 'Mazda6', 'CX-5'],
    'Mclaren': ['720S', '570S'],
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
    'Spartan': ['Other'],
    'Sterling': ['Other'],
    'Subaru': ['Outback', 'Forester', 'Impreza'],
    'Suzuki': ['Swift', 'Vitara', 'Jimny'],
    'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X'],
    'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tacoma'],
    'Triumph': ['Other'],
    'Tvr': ['Cerbera', 'Tuscan'],
    'Vinfast': ['VF 8', 'VF 9'],
    'Volkswagen': ['Jetta', 'Passat', 'Tiguan', 'Atlas'],
    'Volvo': ['XC60', 'XC90', 'S60'],
    'Yugo': ['GV', 'Tempo'],
    'Zeekr': ['001', '009']
  };
  submodels: { [key: string]: string[] } = {
    'Acura TLX': ['Base', 'Technology', 'Advance'],
    'Acura RDX': ['Base', 'Technology', 'Advance'],
    'Acura MDX': ['Base', 'Technology', 'Advance'],
    'Acura ILX': ['Base', 'Technology'],
    'Acura Integra': ['Base', 'A-Spec', 'Type S'],
    'Acura NSX': ['Base', 'Type S'],
    'Acura TL': ['Base', 'Type-S', 'Tech'],
    'Acura RL': ['Base', 'Tech', 'Sport Hybrid'],
    'Acura RLX': ['Base', 'Tech', 'Sport Hybrid'],
    'Acura CSX': ['Base', 'Premium'],
    'Acura ZDX': ['Base', 'Tech', 'Advance'],
    'Acura Legend': ['Base', 'LS', 'GS'],
    'Acura Vigor': ['Base', 'GS'],
    'Acura EL': ['Base', 'Premium'],

    'Alfa Romeo Giulia': ['Base', 'Ti', 'Quadrifoglio'],
    'Alfa Romeo Stelvio': ['Base', 'Ti', 'Quadrifoglio'],
    'Alfa Romeo Tonale': ['Base', 'Ti'],
    'Alfa Romeo 4C': ['Base', 'Spider'],
    'Alfa Romeo GTV': ['Base', 'V6'],
    'Alfa Romeo Spider': ['Base', 'Veloce'],
    'Alfa Romeo MiTo': ['Base', 'Quadrifoglio Verde'],
    'Alfa Romeo 159': ['Base', 'Sport', 'TI'],
    'Alfa Romeo Brera': ['Base', 'SkyView'],
    'Alfa Romeo Giulietta': ['Base', 'Veloce', 'Quadrifoglio Verde'],
    'Alfa Romeo GT': ['Base', 'V6'],
    'Alfa Romeo SZ': ['Base', 'Sprint Zagato'],
    'Alfa Romeo RZ': ['Base', 'Roadster Zagato'],

    'HMMWV / Humvee': ['Standard military HMMWV', 'Up‑armored HMMWV', 'Special‑purpose variants (troop carrier, cargo, ambulance, weapons‑platform, etc.)'],
    'Hummer H1': ['Base', 'Hard‑top', 'Soft‑top', 'Wagon version'],
    'Hummer H2': ['Base', 'Luxury / Premium trim (civilian)'],
    'M35 truck series': ['2½‑ton cargo truck', 'Cargo / troop transport', 'Wrecker / utility variants'],
    'M939 truck series': ['5‑ton cargo truck', 'Cargo / troop transport', 'Special‑purpose variants'],
    'Commercial vans / utility vehicles': ['Postal / delivery vans (historic)', 'Utility / service vans and trucks (contract / fleet use)'],

    'AMC Javelin': ['Base', ' SST', 'AMX Package', 'Machine'],
    'AMC AMX': ['Base', '390', 'Go Package', 'Big Block'],
    'AMC Gremlin': ['Base', 'X', 'GT', 'SC/360'],
    'AMC Hornet': ['Base', 'Sportabout', 'SC/360', 'X', 'DL'],
    'AMC Concord': ['Base', 'DL', 'Limited', 'AMX Package'],
    'AMC Spirit': ['Base', 'DL', 'GT', 'X'],
    'AMC Eagle': ['Base', 'SX/4', '4WD'],
    'AMC Matador': ['Base', ' coupe', 'Sedan', 'Barcelona Package'],
    'AMC Rebel': ['Base', 'Machine', 'Crossover', 'SST'],
    'AMC Ambassador': ['Base', 'DPL', 'SST', 'Brougham'],
    'AMC Marlin': ['Base', 'GT', 'Fastback'],
    'AMC Pacer': ['Base', 'DL', 'Limited', 'X'],

    'ARO IMS': ['IMS‑57', 'M59', 'M461', 'M461 C', 'M473', '304 (special)', '306 (special)'],
    'ARO 24 Series': ['ARO 240', 'ARO 241', 'ARO 242 (pickup)', 'ARO 243 (3‑door)', 'ARO 244 (4‑door SUV)', 'ARO 246', 'ARO 263', 'ARO 264', 'ARO 266', 'ARO 242‑pickup', 'ARO 320‑pickup', 'ARO Dragon (military / special)'],
    'ARO 10 Series': ['ARO 10.1', 'ARO 10.4', 'ARO 10 Spartana', 'ARO 11.4','ARO 10.2', 'ARO 10.3', 'ARO 10.6 (pickup)', 'ARO 10.9', 'ARO 10.0', 'ARO 11.9', 'ARO 10 Super'],

    'Aston Martin Vantage': ['Base', 'AMR', 'Roadster', 'V8', 'V12'],
    'Aston Martin DB11': ['V8', 'V12', 'AMR'],
    'Aston Martin DB9': ['Base', 'Volante', 'GT', 'LM'],
    'Aston Martin DBX': ['Base', '707', '707 Edition', 'AMR', '707 AMR Edition'],
    'Aston Martin Rapide': ['S', 'E', 'AMR'],
    'Aston Martin Vanquish': ['Base', 'S', 'Volante', 'AMR'],
    'Aston Martin Valhalla': ['Standard', 'AMR Pro'],
    'Aston Martin Valkyrie': ['Roadster', 'AMR Pro'],
    'Aston Martin Cygnet': ['Base', 'City Car'],
    'Aston Martin One-77': ['Standard', 'Special Editions'],
    'Aston Martin Lagonda': ['Taraf', 'All-electric future concept'],

    'Audi A1': ['Base', 'Sport', 'S line', 'Citycarver'],
    'Audi A3': ['Base', 'Sport', 'S line', 'e-tron', 'Sedan', 'Sportback'],
    'Audi A4': ['Premium', 'Premium Plus', 'Prestige', 'S line'],
    'Audi A5': ['Coupe', 'Sportback', 'S line', 'Prestige', 'S5'],
    'Audi A6': ['Premium', 'Premium Plus', 'Prestige', 'S line', 'S6'],
    'Audi A7': ['Premium', 'Premium Plus', 'Prestige', 'S line', 'S7'],
    'Audi A8': ['Standard', 'L', 'S line', 'S8'],
    'Audi Q2': ['Base', 'S line', 'Edition #1'],
    'Audi Q3': ['Premium', 'Premium Plus', 'Prestige', 'S line'],
    'Audi Q4': ['e-tron', 'S line', 'Sportback'],
    'Audi Q5': ['Premium', 'Premium Plus', 'Prestige', 'S line', 'SQ5'],
    'Audi Q7': ['Premium', 'Premium Plus', 'Prestige', 'S line', 'SQ7'],
    'Audi Q8': ['Premium', 'Premium Plus', 'Prestige', 'S line', 'SQ8', 'RS Q8'],
    'Audi TT': ['Base', 'S line', 'TTS'],
    'Audi TTS': ['Coupe', 'Roadster'],
    'Audi R8': ['V10', 'V10 Performance', 'Spyder', 'V10 Plus'],
    'Audi e-tron': ['50', '55', 'Sportback', 'GT', 'S'],
    'Audi RS models': ['RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'RS Q3', 'RS Q5', 'RS Q8'],
    'Audi S models': ['S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ5', 'SQ7', 'SQ8'],

    'Pininfarina Battista': ['Standard'],
    'Pininfarina B95': ['Standard'],

    'Avanti (original)': ['Coupe'],
    'Avanti II': ['Coupe'],
    'Avanti (post‑II)': ['Coupe', 'Convertible', 'Long‑Wheelbase Coupe', '4‑Door Sedan'],
    'Avanti Convertible': ['Convertible'],
    'Avanti Long‑Wheelbase Coupe': ['Long‑Wheelbase Coupe'],
    'Avanti 4‑Door Sedan': ['4‑Door Sedan'],
    'Studebaker XUV': ['SUV / Utility Concept'],
    'SVO Lister': ['Sports‑car / Replica Concept'],

    'Transit Connect Electric': ['Standard electric van'],
    'Balance Hybrid Electric': ['Standard hybrid commercial van/truck/shuttle configuration'],
    'Force Drive Electric': ['Used in EV conversions / integrations on various commercial vehicles'],

    'Bentley Continental': ['GT', 'GTC', 'Speed', 'GT3-R', 'Supersports'],
    'Bentley Flying Spur': ['Base', 'V8', 'W12', 'Speed'],
    'Bentley Bentayga': ['Base', 'V8', 'W12', 'Speed', 'Hybrid'],
    'Bentley Mulsanne': ['Base', 'Speed', 'Extended Wheelbase'],
    'Bentley Arnage': ['Base', 'Red Label', 'Green Label', 'T', 'R'],
    'Bentley Azure': ['Convertible', 'T', 'Final Series'],
    'Bentley Brooklands': ['Coupe', 'Speed', 'Final Series'],
    'Bentley Turbo R': ['Base', 'Long Wheelbase'],
    'Bentley Eight': ['Base'],
    'Bentley EXP series': ['EXP 10 Speed 6', 'EXP 12 Speed 6e', 'EXP 100 GT'],

    'BMW 1 Series': ['Base', 'M Sport', '118i', '120i', '128ti'],
    'BMW 2 Series': ['Coupe', 'Gran Coupe', 'Convertible', 'M240i', 'M2'],
    'BMW 3 Series': ['Sedan', 'Touring', 'Gran Turismo', '330i', 'M340i', 'M3'],
    'BMW 4 Series': ['Coupe', 'Convertible', 'Gran Coupe', '430i', 'M440i', 'M4'],
    'BMW 5 Series': ['Sedan', '530i', '540i', 'M550i', 'M5'],
    'BMW 6 Series': ['Gran Turismo', 'M6'],
    'BMW 7 Series': ['730i', '740i', '750i', 'M760i', 'i7'],
    'BMW 8 Series': ['Coupe', 'Convertible', 'Gran Coupe', 'M850i', 'M8'],
    'BMW X1': ['sDrive', 'xDrive', 'M Sport'],
    'BMW X2': ['sDrive', 'xDrive', 'M35i'],
    'BMW X3': ['xDrive30i', 'M40i', 'M', 'X3M'],
    'BMW X4': ['xDrive30i', 'M40i', 'X4M'],
    'BMW X5': ['xDrive40i', 'M50i', 'X5M'],
    'BMW X6': ['xDrive40i', 'M50i', 'X6M'],
    'BMW X7': ['xDrive40i', 'M50i', 'X7 M50i'],
    'BMW Z4': ['sDrive30i', 'M40i'],
    'BMW i3': ['Standard', 'i3s'],
    'BMW i4': ['eDrive40', 'M50'],
    'BMW i7': ['Base', 'M70'],
    'BMW iX': ['xDrive40', 'xDrive50', 'M60'],
    'BMW iX3': ['Base'],
    'BMW M Series': ['M2', 'M3', 'M4', 'M5', 'M8', 'XM', 'X3M', 'X4M', 'X5M', 'X6M', 'X7M'],

    'BrightDrop 400': ['Base (short‑wheelbase van)', 'FWD', 'AWD'],
    'BrightDrop 600': ['Base (long‑wheelbase van)', 'FWD', 'AWD'],

    'Bugatti Veyron': ['16.4', 'Grand Sport', 'Super Sport', 'Pur Sang', 'L’Or Blanc', 'Sang Noir'],
    'Bugatti Chiron': ['Base', 'Sport', 'Pur Sport', 'Super Sport 300+', 'Noire Edition', 'Les Légendes de Bugatti'],
    'Bugatti Divo': ['Standard'],
    'Bugatti Centodieci': ['Standard'],
    'Bugatti La Voiture Noire': ['One-Off'],
    'Bugatti Bolide': ['Track Spec'],
    'Bugatti EB110': ['GT', 'SS', 'Super Sport LM'],
    'Bugatti Type 35': ['Grand Prix', 'T35C', 'T35B', 'T35T'],
    'Bugatti Type 41 Royale': ['Standard', 'Coupe Napoleon', 'Sedan'],
    'Bugatti Type 57': ['SC Atlantic', 'Atalante', 'Ventoux', 'Coureur', 'S', 'Touring'],
    'Bugatti Type 55': ['Roadster', 'Tourer'],
    'Bugatti Type 13': ['Brescia', 'Roadster'],
    'Bugatti Type 18': ['Black Bess'],
    'Bugatti Type 23': ['Tank'],

    'Buick Enclave': ['Base', 'Preferred', 'Avenir', 'Premium', 'Essence'],
    'Buick Envision': ['Preferred', 'Essence', 'Premium', 'Avenir'],
    'Buick Encore': ['Base', 'Preferred', 'Sport Touring', 'Essence', 'Avenir'],
    'Buick Encore GX': ['Preferred', 'Essence', 'Avenir'],
    'Buick Regal': ['TourX', 'GS', 'Sportback', 'Preferred', 'Essence'],
    'Buick Regal TourX': ['Preferred', 'Essence', 'Avenir'],
    'Buick LaCrosse': ['Preferred', 'Essence', 'Avenir'],
    'Buick Verano': ['Base', 'Sport Touring', 'Turbo', 'Leather Group'],
    'Buick Riviera': ['Standard'],
    'Buick Century': ['Base', 'Custom', 'Limited', 'Special Edition'],
    'Buick Skylark': ['Base', 'GS', 'Gran Sport'],
    'Buick Electra': ['Base', 'Park Avenue', 'Limited'],
    'Buick Roadmaster': ['Base', 'Estate', 'Limited'],

    'BYD Tang': ['DM', 'DM-i', 'EV', 'Pro', 'Max'],
    'BYD Song': ['DM', 'DM-i', 'EV', 'Pro', 'Plus'],
    'BYD Han': ['EV', 'DM-i', 'DM', 'Pro', 'Max'],
    'BYD Yuan': ['EV', 'DM', 'Pro'],
    'BYD Dolphin': ['Standard', 'Pro'],
    'BYD Seal': ['Standard', 'Performance'],
    'BYD Atto 3': ['Standard', 'Pro', 'Performance'],
    'BYD Qin': ['Pro', 'EV', 'Plus', 'DM-i'],
    'BYD F0': ['Standard', 'Deluxe'],
    'BYD F3': ['Standard', 'GL', 'GLX', 'Pro'],
    'BYD F6': ['Standard', 'Deluxe', 'Pro'],
    'BYD e6': ['Standard', 'Taxi', 'Fleet'],
    'BYD S2': ['Standard', 'Pro'],
    'BYD e1': ['Standard', 'Pro'],
    'BYD M3': ['Standard', 'EV'],
    'BYD T3': ['Commercial Van'],
    
    'Cadillac CT4': ['Luxury', 'Sport', 'Premium Luxury', 'V-Series'],
    'Cadillac CT5': ['Luxury', 'Sport', 'Premium Luxury', 'V-Series', 'CT5-V Blackwing'],
    'Cadillac CT6': ['Luxury', 'Premium Luxury', 'Platinum', 'V-Series'],
    'Cadillac CTS': ['Luxury', 'Performance', 'V-Series'],
    'Cadillac ATS': ['Luxury', 'Performance', 'V-Series'],
    'Cadillac XTS': ['Luxury', 'Premium Luxury', 'Platinum'],
    'Cadillac Escalade': ['Standard', 'ESV', 'Premium Luxury', 'Sport', 'Platinum'],
    'Cadillac XT4': ['Luxury', 'Premium Luxury', 'Sport'],
    'Cadillac XT5': ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'],
    'Cadillac XT6': ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'],
    'Cadillac SRX': ['Luxury', 'Performance'],
    'Cadillac ELR': ['Standard'],
    'Cadillac DTS': ['Standard', 'Luxury'],
    'Cadillac Seville': ['SLS', 'STS', 'STS-V'],
    'Cadillac Eldorado': ['Base', 'Touring', 'ETC'],
    'Cadillac DeVille': ['Base', 'DTS', 'Concours'],
    'Cadillac Fleetwood': ['Base', 'Sixty Special'],
    'Cadillac Brougham': ['Standard'],

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
    'Fisker Ocean': ['Base'],
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
    'GEM Other': ['Base'],
    'GMC Sierra': ['Base', 'SLE', 'SLT'],
    'GMC Yukon': ['SLE', 'SLT', 'Denali'],
    'GMC Terrain': ['SLE', 'SLT'],
    'Honda Civic': ['LX', 'Sport', 'EX', 'Touring'],
    'Honda Accord': ['LX', 'Sport', 'EX', 'Touring'],
    'Honda CR-V': ['LX', 'EX', 'EX-L', 'Touring'],
    'Honda Pilot': ['LX', 'EX', 'EX-L', 'Touring'],
    'Honda Fit': ['LX', 'Sport', 'EX'],
    'Hummer H3': ['Base'],
    'Hyundai Elantra': ['SE', 'SEL', 'Limited'],
    'Hyundai Sonata': ['SE', 'SEL', 'Limited'],
    'Hyundai Tucson': ['SE', 'SEL', 'Limited'],
    'Hyundai Santa Fe': ['SE', 'SEL', 'Limited'],
    'Ineos Grenadier': ['Base'],
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
    'Karma Revero': ['Base'],
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
    'Lordstown Endurance': ['Base'],
    'Lotus Evora': ['Base'],
    'Lotus Elise': ['Base'],
    'Lucid Air': ['Base'],
    'Mahindra Scorpio': ['Base'],
    'Mahindra Bolero': ['Base'],
    'Maserati Ghibli': ['Base', 'S'],
    'Maserati Levante': ['Base', 'S'],
    'Maserati Quattroporte': ['Base', 'S'],
    'Maybach S-Class': ['Base'],
    'Maybach GLS': ['Base'],
    'Mazda Mazda3': ['Base', 'Premium', 'Turbo'],
    'Mazda Mazda6': ['Base', 'Grand Touring'],
    'Mazda CX-5': ['Base', 'Grand Touring'],
    'Mclaren 720S': ['Base'],
    'Mclaren 570S': ['Base'],
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
    'Spartan Other': ['Base'],
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
    'Toyota Camry': ['LE', 'SE', 'XLE', 'XSE'],
    'Toyota Corolla': ['L', 'LE', 'S', 'SE'],
    'Toyota RAV4': ['LE', 'XLE', 'Adventure', 'TRD Off Road'],
    'Toyota Highlander': ['LE', 'XLE', 'Limited', 'Platinum'],
    'Toyota Prius': ['L', 'LE', 'XLE'],
    'Toyota Tacoma': ['SR', 'SR5', 'TRD Off Road'],
    'Triumph Other': ['Base'],
    'Tvr Cerbera': ['Base'],
    'Tvr Tuscan': ['Base'],
    'Vinfast VF 8': ['Base'],
    'Vinfas VF 9': ['Base'],
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