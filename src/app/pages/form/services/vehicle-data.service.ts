import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VehicleDataService {
    makes = [
    'Acura', 'Alfa Romeo', 'American General', 'American Motors', 'ARO', 'Aston Martin', 'Audi', 'Automobili Pininfarina', 'Avanti', 'Azure Dynamics', 'Bentley', 'BMW', 'BrightDrop', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Chevrolet', 'Chrysler', 'Daewoo', 'Daihatsu', 'Datsun', 'Dodge', 'Eagle', 'Ferrari', 'Fiat', 'Fisker', 'Ford', 'Freightliner', 'Genesis', 'Geo', 'GEM', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Ineos', 'Infiniti', 'International', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'Karma', 'Kia', 'Laforza', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lincoln', 'Lordstown', 'Lotus', 'Lucid', 'Mahindra', 'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Mercury', 'Merkur', 'MINI', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Peugeot', 'Plymouth', 'Polestar', 'Pontiac', 'Porsche', 'Ram', 'Renault', 'Rivian', 'Rolls-Royce', 'Saab', 'Saturn', 'Smart', 'Spartan', 'Sterling', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Triumph', 'TVR', 'VinFast', 'Volkswagen', 'Volvo', 'Yugo', 'Zeekr'
    ];

    models: { [key: string]: string[] } = {
    'Acura': [
        'ILX', 'TLX', 'RLX', 'TSX', 'Integra', 'Legend', 'CL', 'EL', 'RL', 'TL',
        'CSX', 'RSX', 'MDX', 'RDX', 'ZDX', 'SLX', 'Vigor', 'NSX'
    ],
    'Alfa Romeo': [
        'Giulia', 'Stelvio', 'Tonale', '4C', '8C', 'Spider', 'GTV', '166', '159',
        '147', '156', 'Brera', 'MiTo', 'Giulietta'
    ],
    'American General': [
        'HMMWV', 'Humvee', 'M35', 'M939', 'Hummer H1'
    ],
    'American Motors': [
        'Gremlin', 'Hornet', 'Pacer', 'Matador', 'Concord', 'Spirit',
        'Rambler', 'Eagle', 'Ambassador', 'AMX', 'Javelin'
    ],
    'ARO': [
        '24 Series', '26 Series', '10 Series', 'M461', 'Dragon', 'Spartan'
    ],
    'Aston Martin': [
        'DB11', 'DB12', 'DB9', 'DBS', 'DBS Superleggera', 'DBX',
        'Vantage', 'Vanquish', 'Virage', 'Rapide', 'Lagonda',
        'DB7', 'DB5', 'DB4'
    ],
    'Audi': [
        'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
        'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'Q8 e-tron',
        'TT', 'R8', 'e-tron GT', 'RS Series', 'S Series'
    ],
    'Automobili Pininfarina': [
        'Battista', 'Barchetta'
    ],
    'Avanti': [
        'Avanti II', 'Studebaker Avanti', 'Avanti Convertible', 'Avanti Coupe',
        'Avanti LTS', 'Avanti Touring Sedan'
    ],
    'Azure Dynamics': [
        'Transit Connect Electric', 'Balance Hybrid Electric', 'Force Drive'
    ],
    'Bentley': [
        'Continental GT', 'Flying Spur', 'Bentayga', 'Mulsanne', 'Arnage', 'Azure', 'Brooklands', 'Turbo R', 'Turbo RT', 'Continental Flying Spur'
    ],
    'BMW': [
        '1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series',
        'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7',
        'Z3', 'Z4', 'Z8',
        'i3', 'i4', 'iX', 'iX3', 'i8',
        'M2', 'M3', 'M4', 'M5', 'M6'
    ],
    'BrightDrop': [
        'EV600', 'EV410', 'Zevo 600', 'Zevo 400'
    ],
    'Bugatti': [
        'Chiron', 'Divo', 'Centodieci', 'Veyron', 'La Voiture Noire', 'EB110', 'Type 35', 'Type 41 Royale', 'Bolide', 'Mistral'
    ],
    'Buick': [
        'Enclave', 'Envision', 'Encore', 'Encore GX', 'Regal', 'LaCrosse', 'Verano', 'Riviera', 'Century', 'Electra', 'Park Avenue'
    ],
    'BYD': [
        'Tang', 'Han', 'Song', 'Yuan', 'e6', 'D1', 'D2', 'Qin', 'Seal', 'Atto 3', 'Dolphin', 'F3', 'F0', 'S2', 'S7'
    ],
    'Cadillac': [
        'CT4', 'CT5', 'CT6', 'CTS', 'ATS', 'XTS', 'Escalade', 'XT4', 'XT5', 'XT6', 'ELR', 'SRX', 'STS', 'BLS', 'Catera', 'DeVille', 'Fleetwood', 'Seville'
    ],
    'Chevrolet': [
        'Spark', 'Aveo', 'Sonic', 'Malibu', 'Impala', 'Cruze', 'Volt', 'Camaro', 'Corvette', 'Trailblazer', 'Equinox', 'Blazer', 'Traverse', 'Tahoe', 'Suburban', 'Colorado', 'Silverado', 'Express', 'Bolt EV', 'Menlo', 'Orlando', 'Captiva'
    ],
    'Chrysler': [
        '200', '300', '300C', '300M', 'Aspen', 'Pacifica',
        'Sebring', 'Concorde', 'Crossfire', 'PT Cruiser',
        'Voyager', 'Grand Voyager', 'Town & Country',
        'Cirrus', 'LHS', 'Neon'
    ],
    'Daewoo': [
        'Matiz', 'Tico', 'Lanos', 'Nexia', 'Cielo', 'Leganza',
        'Espero', 'Kalos', 'Gentra', 'Magnus', 'Lacetti',
        'Prince', 'Racer', 'Arcadia', 'Evanda', 'Tosca',
        'Damas', 'Labo'
    ],
    'Daihatsu': [
        'Mira', 'Cuore', 'Move', 'Terios', 'Hijet', 'Charade',
        'Copen', 'Boon', 'Rocky', 'Taft', 'Atrai', 'Sirion',
        'Materia', 'Applause', 'Max', 'Esse', 'Cast', 'Thor'
    ],
    'Datsun': [
        'Redi-Go', 'Go', 'Go+', '240Z', '260Z', '280Z', '120Y',
        'Sunny', 'Bluebird', 'Cherry', 'Stanza', 'Fairlady', 'Truck'
    ],
    'Dodge': [
            'Charger', 'Challenger', 'Durango', 'Ram', 'Dakota',
            'Journey', 'Nitro', 'Avenger', 'Dart', 'Neon', 'Caliber',
            'Magnum', 'Viper', 'Stealth', 'Caravan', 'Grand Caravan',
            'Intrepid', 'Stratus', 'Omni', 'Spirit', 'Coronet'
        ],
        'Eagle': [
            'Talon', 'Premier', 'Summit', 'Vision', 'Medallion'
        ],
        'Ferrari': [
            'Roma', 'Roma Spider', 'Portofino', 'California', 'California T',
            '296 GTB', '296 GTS', 'F8 Tributo', 'F8 Spider',
            '488 GTB', '488 Spider', '488 Pista', '488 Pista Spider',
            'SF90 Stradale', 'SF90 Spider',
            '812 Superfast', '812 GTS',
            'LaFerrari', 'Enzo', 'F50', 'F40',
            'Daytona SP3', 'Monza SP1', 'Monza SP2',
            'GTC4Lusso', 'GTC4Lusso T',
            'FF', 'Purosangue',
            'Testarossa', '512 TR', '512 M',
            '348', '355', '360 Modena', '360 Spider',
            '430', '458 Italia', '458 Spider', '458 Speciale',
            '599 GTB', '599 GTO', '599 GTB Fiorano', '612 Scaglietti',
            'Maranello', 'Superamerica'
        ],
        'Fiat': [
            '500', '500C', '500L', '500X',
            'Panda', 'Punto', 'Grande Punto', 'Palio', 'Uno',
            'Tipo', 'Linea', 'Doblo', 'Fiorino', 'Qubo',
            'Bravo', 'Brava', 'Stilo', 'Seicento', 'Multipla',
            'Strada', 'Toro', 'Idea', 'Mobi', 'Argo', 'Cronos',
            'Albea', 'Siena', 'Tempra', 'Croma'
        ],
        'Fisker': [
            'Ocean', 'Karma', 'Ronin', 'Alaska', 'PEAR', 'Orbit'
        ],
        'Ford': [
            'Fiesta', 'Focus', 'Fusion', 'Taurus', 'Mustang', 'GT',
            'EcoSport', 'Escape', 'Bronco', 'Bronco Sport', 'Edge',
            'Explorer', 'Expedition',
            'Ranger', 'F-150', 'F-250', 'F-350',
            'Maverick', 'Transit', 'Transit Connect',
            'Everest', 'Escort', 'Mondeo', 'S-Max', 'Galaxy',
            'Ka', 'C-Max', 'B-Max', 'Flex', 'Five Hundred'
        ],
        'Freightliner': [
            'Cascadia', 'Columbia', 'Century Class', 'Argosy',
            'Coronado', 'FLD', 'FLB', 'FLC', 'M2 106',
            'M2 112', '108SD', '114SD', '122SD',
            'Sprinter', 'Business Class', 'EconicSD'
        ],
        'Genesis': [
            'G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80', 'X Concept'
        ],
        'Geo': [
            'Metro', 'Prizm', 'Storm', 'Tracker', 'Spectrum'
        ],
        'GEM': [
            'e2', 'e4', 'e6', 'eL XD', 'eM 1400 LSV', 'eL', 'ES'
        ],
        'GMC': [
            'Canyon', 'Sierra 1500', 'Sierra HD', 'Acadia',
            'Terrain', 'Yukon', 'Yukon XL', 'Hummer EV Pickup',
            'Hummer EV SUV', 'Safari', 'Envoy', 'Sonoma',
            'Jimmy', 'Savana', 'Typhoon', 'Syclone'
        ],
        'Honda': [
            'Civic', 'Accord', 'City', 'Fit', 'Jazz', 'Insight', 'Legend',
            'HR-V', 'CR-V', 'ZR-V', 'Passport', 'Pilot', 'Odyssey',
            'Ridgeline', 'Element', 'Freed', 'Stepwgn', 'S660',
            'NSX', 'Brio', 'Amaze', 'WR-V', 'Elysion', 'Crosstour',
            'Clarity', 'Beat', 'Prelude', 'S2000'
        ],
        'Hummer': [
            'H1', 'H2', 'H3', 'H3T'
        ],
        'Hyundai': [
            'Accent', 'Elantra', 'Sonata', 'Azera', 'Venue', 'Kona', 'Tucson',
            'Santa Fe', 'Palisade', 'Ioniq', 'Staria', 'Nexo',
            'Veloster', 'Getz', 'i10', 'i20', 'i30', 'Matrix', 'Tiburon',
            'Genesis', 'Atos', 'Trajet', 'Santro', 'Coupe', 'H-1', 'H-100'
        ],
        'Ineos': [
            'Grenadier'
        ],
        'Infiniti': [
            'Q50', 'Q60', 'Q70', 'Q70L', 'QX30', 'QX50', 'QX55', 'QX60', 'QX70', 'QX80', 'EX35', 'FX35', 'FX37', 'FX50', 'M30', 'M35', 'M37', 'M45', 'Q45'
        ],
        'International': [
            'Scout', 'Scout II', 'Navistar', 'LT Series', 'TranStar', 'Durastar', 'ProStar', 'WorkStar', 'HV Series', 'S-Series', 'MaxxForce', 'PayStar'
        ],
        'Isuzu': [
            'D-Max', 'MU-X', 'Trooper', 'Rodeo', 'Amigo', 'VehiCROSS',
            'Ascender', 'F-Series', 'N-Series', 'Elf', 'Giga', 'Journey'
        ],
        'Iveco': [
            'Daily', 'EuroCargo', 'Stralis', 'Trakker', 'S-Way', 'Magirus', 'PowerDaily'
        ],
        'Jaguar': [
            'XE', 'XF', 'XJ', 'F-Pace', 'E-Pace', 'I-Pace', 'F-Type', 'XK', 'S-Type', 'Mark X', 'C-Type', 'D-Type'
        ],
        'Jeep': [
            'Wrangler', 'Wrangler Unlimited', 'Gladiator', 'Cherokee', 'Grand Cherokee',
            'Grand Cherokee L', 'Compass', 'Renegade', 'Commander', 'Patriot', 'Liberty',
            'Wagoneer', 'Grand Wagoneer'
        ],
        'Karma': [
            'Revero', 'Revero GT', 'GS-6', 'SC1 Vision'
        ],
        'Kia': [
            'Rio', 'Forte', 'K5', 'Optima', 'Stinger', 'Cerato', 'Cadenza',
            'Soul', 'Seltos', 'Sportage', 'Sorento', 'Telluride', 'Carnival',
            'EV6', 'Niro', 'Stonic', 'Picanto', 'K900', 'Sephia', 'Joice', 'Mohave'
        ],
        'Laforza': [
            'LF-01', 'LF-02', 'LF-03'
        ],
        'Lamborghini': [
            'Aventador', 'Huracan', 'Urus', 'Gallardo', 'Murciélago', 'Diablo', 'Countach', 'Sian', 'Revuelto', 'Veneno', 'Centenario', 'Estoque'
        ],
        'Lancia': [
            'Ypsilon', 'Delta', 'Flavia', 'Thesis', 'Lybra', 'Phedra', 'Musa', 'Stratos', 'Fulvia', 'Beta', 'Dedra'
        ],
        'Land Rover': [
            'Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport',
            'Range Rover Velar', 'Range Rover Evoque', 'Freelander', 'LR2', 'LR3', 'LR4', 'Series I', 'Series II', 'Series III'
        ],
        'Lexus': [
            'IS', 'ES', 'GS', 'LS', 'NX', 'RX', 'GX', 'LX', 'UX', 'LC', 'RC', 'LM', 'HS', 'CT', 'RC F', 'LC F'
        ],
        'Lincoln': [
            'Navigator', 'Aviator', 'Corsair', 'Nautilus', 'MKZ', 'MKS', 'MKX', 'MKT', 'Continental', 'Town Car', 'LS', 'Zephyr'
        ],
        'Lordstown': [
            'Endurance', 'Alpha', 'Electric Pickup', 'Future EV'
        ],
        'Lotus': [
            'Elise', 'Exige', 'Evora', 'Emira', 'Eletre', 'Type 62', 'Europa', '3-Eleven', 'Evija'
        ],
        'Lucid': [
            'Air', 'Gravity', 'Project Gravity'
        ],
        'Mahindra': [
            'Thar', 'XUV700', 'XUV500', 'Scorpio', 'Scorpio N', 'Bolero', 'Marazzo', 'KUV100', 'KUV100 NXT', 'TUV300', 'TUV300 Plus', 'eKUV100', 'Jeep Roxor', 'Xylo'
        ],
        'Maserati': [
            'Ghibli', 'Quattroporte', 'Levante', 'GranTurismo', 'GranCabrio', 'MC20', 'Alfieri'
        ],
        'Maybach': [
            'S-Class Maybach', 'GLS', 'Vision Maybach 6', 'Pullman', '62', '57'
        ],
        'Mazda': [
            'Mazda2', 'Mazda3', 'Mazda6', 'CX-3', 'CX-30', 'CX-4', 'CX-5', 'CX-50', 'CX-60', 'CX-70', 'CX-7', 'CX-8', 'CX-9', 'MX-5', 'RX-7', 'RX-8', 'Mazda5', 'B-Series', 'Premacy', 'MPV'
        ],
        'McLaren': [
            '720S', '570S', '600LT', '650S', '675LT', 'P1', 'Senna', 'Speedtail', 'Artura', 'MP4-12C', 'Elva', 'GT', 'F1', '12C Spider'
        ],
        'Mercedes-Benz': [
            'A-Class', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'SLC', 'SLK', 'AMG GT', 'EQC', 'EQA', 'EQB', 'EQE', 'EQS', 'EQV', 'Maybach S-Class'
        ],
        'Mercury': [
            'Cougar', 'Grand Marquis', 'Mariner', 'Milan', 'Monterey', 'Montego', 'Mountaineer', 'Sable', 'Capri', 'Villager', 'Marauder'
        ],
        'Merkur': [
            'XR4Ti', 'Scorpio', 'Montego', 'Cougar'
        ],
        'MINI': [
            'Cooper', 'Cooper S', 'Cooper SE', 'John Cooper Works', 'Clubman', 'Countryman', 'Convertible', 'Paceman', 'Coupe', 'Roadster', 'Electric'
        ],
        'Mitsubishi': [
            'Mirage', 'Mirage G4', 'Lancer', 'Lancer Evolution', 'Outlander', 'Outlander PHEV', 'Eclipse Cross', 'ASX', 'RVR', 'Pajero', 'Pajero Sport', 'Montero', 'Montero Sport', 'i-MiEV', 'L200', 'Triton', 'Eclipse'
        ],
        'Nissan': [
            'Versa', 'Altima', 'Maxima', 'Sentra', '370Z', '350Z', 'GT-R', 'Leaf', 'Kicks', 'Juke', 'Rogue', 'Rogue Sport', 'Murano', 'Pathfinder', 'Armada', 'Titan', 'Frontier', 'NV200', 'NV Cargo', 'NV Passenger', '370Z Roadster', 'GT-R Nismo'
        ],
        'Oldsmobile': [
            'Alero', 'Aurora', 'Bravada', 'Cutlass', 'Cutlass Ciera', 'Cutlass Supreme', 'Silhouette', 'Intrigue', 'Eighty-Eight', 'Ninety-Eight', 'Delta 88', 'Toronado', 'Omega'
        ],
        'Peugeot': [
            '208', '2008', '308', '3008', '5008', '508', 'Rifter', 'Traveller', 'Partner', 'Expert', 'RCZ', 'iOn', 'e-208', 'e-2008'
        ],
        'Plymouth': [
            'Horizon', 'Voyager', 'Breeze', 'Neon', 'Acclaim', 'Breeze', 'Grand Voyager', 'Reliant', 'Sundance', 'Colt', 'Barracuda', 'Fury', 'Valiant', 'Duster', 'Road Runner', 'Fifth Avenue', 'Laser', 'Proton', 'Prowler'
        ],
        'Polestar': [
            'Polestar 1', 'Polestar 2', 'Polestar 3', 'Polestar 4', 'Polestar 5', 'Polestar 6'
        ],
        'Pontiac': [
            'G6', 'G8', 'Grand Am', 'Grand Prix', 'Sunfire', 'Solstice', 'Firebird', 'Bonneville', 'Aztek', 'Torrent', 'Vibe', 'LeMans', 'Fiero', 'GTO', 'Montana'
        ],
        'Porsche': [
            '911', '718', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Boxster', 'Cayman', '918 Spyder', 'Carrera GT'
        ],
        'Ram': [
            '1500', '2500', '3500', '4500', '5500', 'ProMaster', 'ProMaster City', 'Dakota', 'Charger', '1500 Classic'
        ],
        'Renault': [
            'Clio', 'Captur', 'Megane', 'Talisman', 'Kadjar', 'Koleos', 'Scenic', 'Espace', 'Kangoo', 'Master', 'Trafic', 'Twizy', 'Zoe'
        ],
        'Rivian': [
            'R1T', 'R1S'
        ],
        'Rolls-Royce': [
            'Phantom', 'Ghost', 'Wraith', 'Dawn', 'Cullinan', 'Spectre', 'Silver Shadow', 'Silver Cloud', 'Corniche', 'Silver Spur', 'Camargue', 'Silver Seraph', 'Sweptail'
        ],
        'Saab': [
            '9-3', '9-5', '900', '9000', 'Sonett', '99', '96', '90'
        ],
        'Saturn': [
            'S-Series', 'L-Series', 'Ion', 'Aura', 'Sky', 'Vue', 'Outlook', 'Relay', 'SC', 'SL', 'SW', 'LW'
        ],
        'Smart': [
            'Fortwo', 'Forfour', 'Roadster', 'Cabrio', 'EQ Fortwo', 'EQ Forfour'
        ],
        'Spartan': [
            'Fire Trucks', 'Gladiator', 'Metro Star', 'Metro Star XP', 'Metro Star XL'
        ],
        'Sterling': [
            'Acterra', 'A9500', 'A9513', 'Bullet', 'L7500', 'LT9500', 'A-Line', 'Truck'
        ],
        'Subaru': [
            'Impreza', 'WRX', 'WRX STI', 'Legacy', 'Outback', 'Forester', 'Crosstrek', 'BRZ', 'Ascent', 'Tribeca', 'SVX', 'Justy', 'Baja'
        ],
        'Suzuki': [
            'Swift', 'Vitara', 'Jimny', 'Baleno', 'Celerio', 'S-Cross', 'Alto', 'Ertiga', 'XL7', 'Grand Vitara', 'Kizashi', 'Across'
        ],
        'Tesla': [
            'Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Cybertruck', 'Semi', 'Model S Plaid', 'Model X Plaid'
        ],
        'Toyota': [
            'Corolla', 'Camry', 'Avalon', 'Yaris', 'Supra', '86', 'GR86', 'Sienna', 'Highlander', '4Runner', 'RAV4', 'Venza', 'Sequoia', 'Land Cruiser', 'Tacoma', 'Tundra', 'C-HR', 'bZ4X', 'bZ4X Prime', 'Mirai', 'Prius', 'Prius Prime', 'Crown'
        ],
        'Triumph': [
            'Bonneville', 'Thruxton', 'Street Twin', 'Street Triple', 'Tiger', 'Speed Triple', 'Rocket 3', 'Scrambler', 'Tiger Explorer', 'Daytona', 'Sprint', 'America'
        ],
        'TVR': [
            'Chimaera', 'Cerbera', 'Tuscan', 'Griffith', 'Sagaris', 'T350', 'Typhon', 'Tamora', 'Sagaris', '450SE', '450SX', '450SEAC'
        ],
        'VinFast': [
            'Fadil', 'Lux A2.0', 'Lux SA2.0', 'VF e34', 'VF 8', 'VF 9', 'President'
        ],
        'Volkswagen': [
            'Golf', 'Polo', 'Passat', 'Jetta', 'Arteon', 'Tiguan', 'Touareg', 'T-Cross', 'Taos', 'ID.3', 'ID.4', 'ID. Buzz', 'Beetle', 'Atlas', 'Amarok', 'CC', 'Up!'
        ],
        'Volvo': [
            'XC40', 'XC60', 'XC90', 'S60', 'S90', 'V40', 'V60', 'V90', 'V90 Cross Country', 'C40', 'C70', 'S80', 'V70', 'S40', 'V50'
        ],
        'Yugo': [
            'GV', 'GVX', 'GVX Limited', 'Koral', 'Florida', '45', '55', '65', 'GVX City', 'GVX Sport'
        ],
        'Zeekr': [
            '001', '009', '009 MPV', '001 GT', 'X'
        ]
    };

    submodels: { [key: string]: string[] } = {
    'Acura ILX': ['Base', 'Premium', 'Technology', 'A-Spec'],
    'Acura TLX': ['Base', 'Technology', 'A-Spec', 'Advance', 'Type S'],
    'Acura RLX': ['Base', 'Technology', 'Advance', 'Sport Hybrid'],
    'Acura TSX': ['Base', 'Sport', 'Technology'],
    'Acura Integra': ['Base', 'A-Spec', 'A-Spec Tech', 'Type S'],
    'Acura Legend': ['Base', 'L', 'LS', 'GS'],
    'Acura CL': ['Base', 'Type S'],
    'Acura EL': ['Base', 'Sport', 'Premium'],
    'Acura RL': ['Base', 'Technology', 'Advance'],
    'Acura TL': ['Base', 'Special Edition', 'Technology', 'SH-AWD', 'Type S'],
    'Acura CSX': ['Base', 'Sport', 'Premium'],
    'Acura RSX': ['Base', 'Type S'],
    'Acura MDX': ['Base', 'Technology', 'A-Spec', 'Advance', 'Type S'],
    'Acura RDX': ['Base', 'Technology', 'A-Spec', 'Advance'],
    'Acura ZDX': ['Base', 'A-Spec', 'Type S'],
    'Acura SLX': ['Base', 'Premium'],
    'Acura Vigor': ['LS', 'GS'],
    'Acura NSX': ['Base', 'Type S'],

    'Alfa Romeo Giulia': ['Base', 'Ti', 'Sprint', 'Veloce', 'Quadrifoglio'],
    'Alfa Romeo Stelvio': ['Base', 'Ti', 'Sprint', 'Veloce', 'Quadrifoglio'],
    'Alfa Romeo Tonale': ['Sprint', 'Ti', 'Veloce'],
    'Alfa Romeo 4C': ['Coupe', 'Spider'],
    'Alfa Romeo 8C': ['Competizione', 'Spider'],
    'Alfa Romeo Spider': ['Base', 'Veloce', 'Quadrifoglio Verde'],
    'Alfa Romeo GTV': ['Base', 'Lusso', 'Veloce'],
    'Alfa Romeo 166': ['Base', 'Lusso', 'Super'],
    'Alfa Romeo 159': ['Base', 'Progression', 'Distinctive', 'Ti'],
    'Alfa Romeo 147': ['Base', 'Distinctive', 'Ti', 'GTA'],
    'Alfa Romeo 156': ['Base', 'Progression', 'Distinctive', 'Ti', 'GTA'],
    'Alfa Romeo Brera': ['Base', 'SV', 'S'],
    'Alfa Romeo MiTo': ['Base', 'Progression', 'Distinctive', 'Quadrifoglio Verde'],
    'Alfa Romeo Giulietta': ['Base', 'Progression', 'Distinctive', 'Veloce'],

    'American General HMMWV': [
        'M998', 'M1025', 'M1035', 'M1043', 'M1097', 'M1113', 'M1151', 'M1165'
    ],

    'American General Humvee': [
        'M998', 'M1025', 'M1035', 'M1043', 'M1097', 'M1113', 'M1151', 'M1165'
    ],

    'American General M35': [
        'M35A1', 'M35A2', 'M35A3'
    ],

    'American General M939': [
        'M923', 'M925', 'M927', 'M928', 'M929', 'M930'
    ],

    'American General Hummer H1': [
        'Base', 'Wagon', 'Slantback', '4-Door Hardtop', '4-Door Softtop', 'Alpha'
    ],

    'American Motors Gremlin': ['Base', 'Custom', 'X'],
    'American Motors Hornet': ['Base', 'Sportabout', 'AMX', 'DL'],
    'American Motors Pacer': ['Base', 'DL', 'Limited'],
    'American Motors Matador': ['Base', 'Coupe', 'Sedan', 'Wagon', 'X'],
    'American Motors Concord': ['Base', 'DL', 'Limited'],
    'American Motors Spirit': ['Base', 'GT', 'Limited', 'AMX'],
    'American Motors Rambler': ['American', 'Classic', 'Rebel'],
    'American Motors Eagle': ['Sedan', 'Wagon', 'SX/4', 'Kammback', 'Limited'],
    'American Motors Ambassador': ['Base', 'Custom', 'DPL', 'Brougham'],
    'American Motors AMX': ['Base', 'Go Pack'],
    'American Motors Javelin': ['Base', 'SST', 'AMX'],

    'ARO 24 Series': [
        '240', '241', '242', '243', '244', '246'
    ],

    'ARO 26 Series': [
        '260', '261', '262', '263'
    ],

    'ARO 10 Series': [
        '10', '11', '12', '10.4', '10.9'
    ],

    'ARO M461': [
        'Base', 'Military', 'Utility'
    ],

    'ARO Dragon': [
        'Base', 'Turbo', '4x4'
    ],

    'ARO Spartan': [
        'Base', '4x4', 'Utility'
    ],

    'Aston Martin DB11': ['V8', 'V12', 'AMR'],
    'Aston Martin DB12': ['Coupe', 'Volante'],
    'Aston Martin DB9': ['Base', 'Volante', 'GT'],
    'Aston Martin DBS': ['Superleggera', 'Volante'],
    'Aston Martin DBS Superleggera': ['Coupe', 'Volante'],
    'Aston Martin DBX': ['Base', '707'],
    'Aston Martin Vantage': ['Base', 'AMR', 'F1 Edition', 'Roadster'],
    'Aston Martin Vanquish': ['Base', 'S', 'Volante'],
    'Aston Martin Virage': ['Coupe', 'Volante'],
    'Aston Martin Rapide': ['Base', 'S', 'E'],
    'Aston Martin Lagonda': ['Taraf'],
    'Aston Martin DB7': ['I6', 'V12', 'Vantage', 'Volante'],
    'Aston Martin DB5': ['Standard', 'Vantage', 'Convertible'],
    'Aston Martin DB4': ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],

    'Audi A1': ['Base', 'Sport', 'S Line'],
    'Audi A2': ['Base', 'SE', 'Sport'],
    'Audi A3': ['Premium', 'Premium Plus', 'Prestige', 'S3', 'RS3'],
    'Audi A4': ['Premium', 'Premium Plus', 'Prestige', 'S4', 'allroad'],
    'Audi A5': ['Premium', 'Premium Plus', 'Prestige', 'S5', 'RS5'],
    'Audi A6': ['Premium', 'Premium Plus', 'Prestige', 'S6', 'RS6 Avant'],
    'Audi A7': ['Premium', 'Premium Plus', 'Prestige', 'S7', 'RS7'],
    'Audi A8': ['L', 'L Sport', 'L Horch', 'S8'],

    'Audi Q2': ['Base', 'Sport', 'S Line'],
    'Audi Q3': ['Premium', 'Premium Plus', 'Prestige', 'RS Q3'],
    'Audi Q4 e-tron': ['Base', 'Premium', 'Premium Plus'],
    'Audi Q5': ['Premium', 'Premium Plus', 'Prestige', 'SQ5'],
    'Audi Q7': ['Premium', 'Premium Plus', 'Prestige', 'SQ7'],
    'Audi Q8': ['Premium', 'Premium Plus', 'Prestige', 'SQ8', 'RS Q8'],
    'Audi Q8 e-tron': ['Premium', 'Sportback', 'Prestige'],

    'Audi TT': ['Coupe', 'Roadster', 'TTS', 'TT RS'],
    'Audi R8': ['V10', 'V10 Plus', 'Performance', 'Spyder'],

    'Audi e-tron GT': ['Premium Plus', 'Prestige', 'RS e-tron GT'],

    'Audi RS Series': [
        'RS3', 'RS4 Avant', 'RS5', 'RS6 Avant', 'RS7', 'RS Q3', 'RS Q8', 'RS e-tron GT'
    ],

    'Audi S Series': [
        'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ5', 'SQ7', 'SQ8'
    ],

    'Automobili Pininfarina Battista': [
        'Base', 'Anniversario', 'Battista Cinquantacinque', 'Furiosa', 'Nero', 'Bianco', 'Gorizia', 'Pura', 'Special Bespoke Editions'
    ],
    'Automobili Pininfarina Barchetta': [
        'Limited Edition', 'Bespoke Commission'
    ],

    'Avanti Avanti II': [
        'Base', 'Luxury', 'Coupe', 'Convertible'
    ],

    'Avanti Studebaker Avanti': [
        'R1', 'R2', 'R3', 'Base'
    ],

    'Avanti Avanti Convertible': [
        'Base', 'Luxury'
    ],

    'Avanti Avanti Coupe': [
        'Base', 'Luxury'
    ],

    'Avanti Avanti LTS': [
        'Base', 'Luxury', 'Touring'
    ],

    'Avanti Avanti Touring Sedan': [
        'Base', 'Luxury'
    ],

    'Azure Dynamics Transit Connect Electric': [
        'Cargo Van', 'Passenger Wagon'
    ],

    'Azure Dynamics Balance Hybrid Electric': [
        'Step Van', 'Walk-in Van'
    ],

    'Azure Dynamics Force Drive': [
        'Electric Drivetrain System'
    ],

    'Transit Connect Electric': ['Standard electric van'],
    'Balance Hybrid Electric': ['Standard hybrid commercial van/truck/shuttle configuration'],
    'Force Drive Electric': ['Used in EV conversions / integrations on various commercial vehicles'],

    'Bentley Continental GT': ['Base', 'V8', 'Speed', 'Supersports', 'Convertible', 'Cabriolet'],
    'Bentley Flying Spur': ['V8', 'W12', 'S', 'Speed'],
    'Bentley Bentayga': ['V8', 'W12', 'Speed', 'Hybrid'],
    'Bentley Mulsanne': ['Base', 'Speed', 'Extended Wheelbase'],
    'Bentley Arnage': ['Base', 'Red Label', 'T', 'R', 'RL'],
    'Bentley Azure': ['Convertible', 'Base', 'T'],
    'Bentley Brooklands': ['Coupe', 'Base', 'Speed'],
    'Bentley Turbo R': ['Base', 'S', 'LWB'],
    'Bentley Turbo RT': ['Base', 'S', 'LWB'],
    'Bentley Continental Flying Spur': ['V8', 'W12', 'Speed'],

    'BMW 1 Series': ['118i', '120i', '125i', '128i', 'M135i', 'M140i'],
    'BMW 2 Series': ['218i', '220i', '228i', 'M235i', 'M240i', 'Gran Coupe', 'Convertible'],
    'BMW 3 Series': ['318i', '320i', '330i', '340i', 'M3', 'Touring', 'Gran Turismo'],
    'BMW 4 Series': ['420i', '430i', '440i', 'M4', 'Coupe', 'Convertible', 'Gran Coupe'],
    'BMW 5 Series': ['520i', '530i', '540i', 'M550i', '530e', 'Touring'],
    'BMW 6 Series': ['630i', '640i', '650i', 'Gran Coupe', 'Convertible', 'Coupe'],
    'BMW 7 Series': ['740i', '750i', '760i', 'M760Li', 'ALPINA B7'],
    'BMW 8 Series': ['840i', '850i', 'M8', 'Gran Coupe', 'Convertible', 'Coupe'],

    'BMW X1': ['sDrive18i', 'xDrive20i', 'xDrive25i', 'xDrive28i'],
    'BMW X2': ['sDrive18i', 'xDrive20i', 'M35i'],
    'BMW X3': ['xDrive20i', 'xDrive30i', 'M40i', 'M'],
    'BMW X4': ['xDrive30i', 'M40i', 'M'],
    'BMW X5': ['xDrive40i', 'xDrive50i', 'M50i', 'M'],
    'BMW X6': ['xDrive40i', 'xDrive50i', 'M50i', 'M'],
    'BMW X7': ['xDrive40i', 'xDrive50i', 'M50i', 'M'],

    'BMW Z3': ['Roadster', 'Coupe', 'M'],
    'BMW Z4': ['sDrive20i', 'sDrive30i', 'M40i', 'M'],
    'BMW Z8': ['Base'],

    'BMW i3': ['Standard', 'Range Extender', 'S'],
    'BMW i4': ['eDrive40', 'M50'],
    'BMW iX': ['xDrive40', 'xDrive50', 'M60'],
    'BMW iX3': ['Base', 'M Sport'],
    'BMW i8': ['Coupe', 'Roadster'],

    'BMW M2': ['Base', 'Competition', 'CS'],
    'BMW M3': ['Base', 'Competition', 'GTS'],
    'BMW M4': ['Base', 'Competition', 'Convertible', 'GTS'],
    'BMW M5': ['Base', 'Competition', 'CS'],
    'BMW M6': ['Base', 'Gran Coupe', 'Convertible', 'Competition'],

    'BrightDrop EV600': ['Standard', 'Pro', 'Max Range'],
    'BrightDrop EV410': ['Standard', 'Pro', 'Max Range'],
    'BrightDrop Zevo 600': ['Cargo Van', 'Delivery Van', 'Long Range'],
    'BrightDrop Zevo 400': ['Cargo Van', 'Delivery Van', 'Urban Range'],

    'Bugatti Chiron': ['Standard', 'Sport', 'Super Sport', 'Pur Sport', 'Noire Edition', 'Sang Noir'],
    'Bugatti Divo': ['Standard', 'Edition One', 'Black Bess', 'Légende'],
    'Bugatti Centodieci': ['Base', 'Limited Edition'],
    'Bugatti Veyron': ['16.4', 'Super Sport', 'Grand Sport', 'Sang Noir'],
    'Bugatti La Voiture Noire': ['One-Off'],
    'Bugatti EB110': ['GT', 'SS', 'Super Sport', 'SS LM'],
    'Bugatti Type 35': ['Standard', 'Grand Prix', 'Replica'],
    'Bugatti Type 41 Royale': ['Standard', 'Touring', 'Limousine'],
    'Bugatti Bolide': ['Prototype', 'Track', 'Limited Edition'],
    'Bugatti Mistral': ['Base', 'Special Edition'],

    'Buick Enclave': ['Preferred', 'Essence', 'Avenir', 'CXL', 'CXL Premium'],
    'Buick Envision': ['Preferred', 'Essence', 'Avenir', 'Premium'],
    'Buick Encore': ['Base', 'Preferred', 'Sport Touring', 'Essence', 'Premium'],
    'Buick Encore GX': ['Preferred', 'Select', 'Essence', 'Avenir'],
    'Buick Regal': ['TourX', 'GS', 'Sportback', 'Avenir', 'Touring'],
    'Buick LaCrosse': ['Sport Touring', 'Essence', 'Premium', 'Avenir'],
    'Buick Verano': ['Base', 'Convenience', 'Leather', 'Turbo', 'Sport Touring'],
    'Buick Riviera': ['Base', 'CXL', 'CXS'],
    'Buick Century': ['Base', 'Custom', 'Limited'],
    'Buick Electra': ['225', '225 Custom', '225 Limited'],
    'Buick Park Avenue': ['Base', 'Ultra', 'Ultra Luxury'],

    'BYD Tang': ['DM', 'DM-i', 'EV', 'Pro', 'EV600', 'DM Pro'],
    'BYD Han': ['EV', 'DM-i', 'DM', 'Plus', 'Top', '4WD'],
    'BYD Song': ['Pro', 'Plus', 'Max', 'EV', 'DM-i', 'DM'],
    'BYD Yuan': ['EV', 'DM-i', 'Pro', 'Plus'],
    'BYD e6': ['Base', 'Elite', 'Comfort', 'Pro'],
    'BYD D1': ['Standard', 'Taxi', 'Fleet'],
    'BYD D2': ['Standard', 'Taxi', 'Fleet'],
    'BYD Qin': ['Pro', 'EV', 'DM', 'Plus'],
    'BYD Seal': ['Standard', 'Performance', '4WD'],
    'BYD Atto 3': ['Standard', 'Pro', 'Performance'],
    'BYD Dolphin': ['Standard', 'Ocean', 'Ocean X'],
    'BYD F3': ['Standard', 'Comfort', 'Luxury'],
    'BYD F0': ['Standard', 'Deluxe', 'Sport'],
    'BYD S2': ['Standard', 'Luxury', 'EV'],
    'BYD S7': ['Standard', 'Pro', 'Luxury'],
    
    'Cadillac CT4': ['Luxury', 'Premium Luxury', 'Sport', 'V-Series'],
    'Cadillac CT5': ['Luxury', 'Premium Luxury', 'Sport', 'V-Series', 'Blackwing'],
    'Cadillac CT6': ['Luxury', 'Premium Luxury', 'Platinum', 'V-Sport'],
    'Cadillac CTS': ['Luxury', 'Performance', 'V-Series', 'CTS-V'],
    'Cadillac ATS': ['Luxury', 'Performance', 'ATS-V'],
    'Cadillac XTS': ['Luxury', 'Premium Luxury', 'Platinum'],
    'Cadillac Escalade': ['Standard', 'Luxury', 'Premium Luxury', 'ESV', 'Sport Platinum'],
    'Cadillac XT4': ['Luxury', 'Premium Luxury', 'Sport'],
    'Cadillac XT5': ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'],
    'Cadillac XT6': ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'],
    'Cadillac ELR': ['Base', 'Premium'],
    'Cadillac SRX': ['Base', 'Luxury', 'Performance'],
    'Cadillac STS': ['Base', 'Performance', 'V-Series'],
    'Cadillac BLS': ['Base', 'Sport', 'Premium'],
    'Cadillac Catera': ['Base', 'Luxury'],
    'Cadillac DeVille': ['Base', 'DTS', 'Concours'],
    'Cadillac Fleetwood': ['Standard', 'Sixty Special', 'Brougham'],
    'Cadillac Seville': ['Base', 'SLS', 'STS', 'STS-V'],

    'Chevrolet Spark': ['LS', 'LT', 'Activ', 'Premier'],
    'Chevrolet Aveo': ['Base', 'LT', 'LTZ'],
    'Chevrolet Sonic': ['LS', 'LT', 'Premier', 'RS'],
    'Chevrolet Malibu': ['L', 'LS', 'RS', 'LT', 'Premier', 'Hybrid'],
    'Chevrolet Impala': ['LS', 'LT', 'Premier'],
    'Chevrolet Cruze': ['L', 'LS', 'LT', 'Premier', 'RS'],
    'Chevrolet Volt': ['LT', 'Premier', 'Base'],
    'Chevrolet Camaro': ['LS', 'LT', 'SS', 'ZL1', 'Convertible', 'Coupe'],
    'Chevrolet Corvette': ['Stingray', 'Grand Sport', 'Z06', 'ZR1', 'Convertible'],
    'Chevrolet Trailblazer': ['LS', 'LT', 'Activ', 'RS'],
    'Chevrolet Equinox': ['L', 'LS', 'LT', 'Premier', 'RS'],
    'Chevrolet Blazer': ['L', 'LT', 'RS', 'Premier', 'SS'],
    'Chevrolet Traverse': ['L', 'LS', 'LT', 'RS', 'Premier', 'High Country'],
    'Chevrolet Tahoe': ['LS', 'LT', 'Z71', 'Premier', 'RST', 'High Country'],
    'Chevrolet Suburban': ['LS', 'LT', 'Premier', 'RST', 'High Country'],
    'Chevrolet Colorado': ['Base', 'WT', 'LT', 'Z71', 'ZR2', 'ZQ8'],
    'Chevrolet Silverado': ['WT', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'Z71'],
    'Chevrolet Express': ['2500', '3500', 'Passenger', 'Cargo', 'Cutaway'],
    'Chevrolet Bolt EV': ['LT', 'Premier', 'EV'],
    'Chevrolet Menlo': ['Standard', 'Luxury'],
    'Chevrolet Orlando': ['LS', 'LT', 'LTZ'],
    'Chevrolet Captiva': ['LS', 'LT', 'LTZ'],

    'Chrysler 200': ['LX', 'Limited', 'S', 'C', 'Touring'],
    'Chrysler 300': ['Touring', 'Limited', 'S', 'C', 'C Platinum'],
    'Chrysler 300C': ['Base', 'Luxury Series', 'Heritage Edition', 'Hemi'],
    'Chrysler 300M': ['Base', 'Special', 'Pro-Am'],
    'Chrysler Aspen': ['Limited', 'HEMI', 'Hybrid'],
    'Chrysler Pacifica': ['Touring', 'Touring L', 'Limited', 'Hybrid', 'Pinnacle'],
    'Chrysler Sebring': ['LX', 'LXi', 'Limited', 'Touring', 'Convertible', 'Sedan'],
    'Chrysler Concorde': ['LX', 'LXi', 'Limited'],
    'Chrysler Crossfire': ['Base', 'Limited', 'SRT-6', 'Coupe', 'Roadster'],
    'Chrysler PT Cruiser': ['Base', 'Classic', 'Limited', 'Touring', 'GT', 'Convertible'],
    'Chrysler Voyager': ['L', 'LX', 'Touring', 'Base'],
    'Chrysler Grand Voyager': ['LX', 'LXi', 'Limited'],
    'Chrysler Town & Country': ['LX', 'Touring', 'Touring L', 'Limited', 'Platinum'],
    'Chrysler Cirrus': ['LX', 'LXi'],
    'Chrysler LHS': ['Base', 'Limited'],
    'Chrysler Neon': ['Base', 'LX', 'SE', 'SXT'],

    'Daewoo Matiz': ['S', 'SE', 'LE', 'LS', 'Super', 'Automatic'],
    'Daewoo Tico': ['Base', 'DLX', 'SL', 'SX'],
    'Daewoo Lanos': ['S', 'SE', 'SX', 'Sport', 'Hatchback', 'Sedan'],
    'Daewoo Nexia': ['GL', 'GLE', 'SOHC', 'DOHC', 'Sedan', 'Hatchback'],
    'Daewoo Cielo': ['GL', 'GLX', 'GSi', 'Sedan', 'Hatchback'],
    'Daewoo Leganza': ['SE', 'SX', 'CDX'],
    'Daewoo Espero': ['Base', 'CD', 'CDX'],
    'Daewoo Kalos': ['S', 'SE', 'SX', 'L', 'LS', 'LT', 'Hatchback', 'Sedan'],
    'Daewoo Gentra': ['Base', 'Comfort', 'Deluxe', 'Automatic'],
    'Daewoo Magnus': ['SE', 'LE', 'L6', 'CDX'],
    'Daewoo Lacetti': ['LX', 'SX', 'SE', 'CDX', 'Hatchback', 'Sedan', 'Wagon'],
    'Daewoo Prince': ['Super Salon', 'Royal Salon', 'Base'],
    'Daewoo Racer': ['GTE', 'GSi', 'GTi', 'Super'],
    'Daewoo Arcadia': ['Base', 'SE', 'Limited'],
    'Daewoo Evanda': ['SX', 'CDX', 'CDX Premium'],
    'Daewoo Tosca': ['SX', 'L6', 'V6', 'Classic'],
    'Daewoo Damas': ['Standard', 'Super', 'Van', 'Cargo'],
    'Daewoo Labo': ['DX', 'STD', 'Cargo'],
    
    'Daihatsu Mira': ['L', 'X', 'X Limited', 'Custom', 'G', 'TX', 'ES', 'e:S'],
    'Daihatsu Cuore': ['CX', 'CL', 'CX Eco', 'CL Eco', 'Automatic', 'Manual'],
    'Daihatsu Move': ['L', 'X', 'Custom', 'RS', 'LATTE', 'Conte'],
    'Daihatsu Terios': ['DX', 'CX', 'CL', 'Custom', 'KL', 'R', 'L', 'Wild'],
    'Daihatsu Hijet': ['Cargo', 'Truck', 'Deck Van', 'DX', 'Deluxe', 'Jumbo'],
    'Daihatsu Charade': ['G11', 'G100', 'G102', 'TS', 'CS', 'CX', 'GTti'],
    'Daihatsu Copen': ['Active Top', 'Robust', 'GR Sport', 'Ultimate Edition'],
    'Daihatsu Boon': ['X', 'XL', 'CL', 'Standard', 'L Package', 'Style'],
    'Daihatsu Rocky': ['X', 'Premium', 'G', 'Z', 'Hybrid e-Smart'],
    'Daihatsu Taft': ['X', 'G', 'G Turbo', 'Custom'],
    'Daihatsu Atrai': ['Base', 'Turbo RS', 'Custom Turbo', 'Premium'],
    'Daihatsu Sirion': ['S', 'SE', 'SX', 'Sport', 'Automatic'],
    'Daihatsu Materia': ['Base', 'SX', 'Sport'],
    'Daihatsu Applause': ['X', 'SXi', '1.6', 'Sedan'],
    'Daihatsu Max': ['L', 'X', 'Custom', 'RS Turbo'],
    'Daihatsu Esse': ['D', 'L', 'X', 'Custom'],
    'Daihatsu Cast': ['Style', 'Activa', 'Sports'],
    'Daihatsu Thor': ['X', 'G', 'Custom', 'Custom G', 'Turbo'],
    
    'Datsun Redi-Go': ['D', 'A', 'T', 'T(O)', 'S', 'Sport', 'AMT'],
    'Datsun Go': ['D', 'A', 'A(O)', 'T', 'T(O)', 'T CVT'],
    'Datsun Go+': ['D', 'A', 'T', 'T(O)', 'T CVT', '7-Seater'],

    'Datsun 240Z': ['Base', 'Deluxe', 'Sport', 'Fairlady Z'],
    'Datsun 260Z': ['Base', '2+2', 'Coupe'],
    'Datsun 280Z': ['Base', '2+2', 'Coupe', 'ZX'],

    'Datsun 120Y': ['Deluxe', 'GL', 'GX', 'Coupe', 'Sedan'],
    'Datsun Sunny': ['B10', 'B11', 'B12', 'B13', 'Coupe', 'Sedan'],
    'Datsun Bluebird': ['510', '610', '810', 'Sedan', 'Wagon'],
    'Datsun Cherry': ['E10', 'F10', 'Coupe', 'Hatchback'],
    'Datsun Stanza': ['GX', 'GL', 'S', 'Sedan', 'Hatchback'],
    'Datsun Fairlady': ['1500', '1600', '2000', 'Roadster'],
    'Datsun Truck': ['520', '620', '720', 'Cab', 'Long Bed'],

    'Dodge Charger': ['SXT', 'GT', 'R/T', 'Scat Pack', 'Super Bee', 'SRT 392', 'SRT Hellcat', 'Daytona', 'Redeye'],
    'Dodge Challenger': ['SXT', 'GT', 'R/T', 'TA', 'Scat Pack', 'SRT 392', 'SRT Hellcat', 'SRT Demon', 'Redeye', 'Super Stock'],
    'Dodge Durango': ['SXT', 'GT', 'Citadel', 'R/T', 'SRT 392', 'SRT Hellcat', 'Crew', 'Limited'],
    'Dodge Ram': ['1500', '2500', '3500', 'Tradesman', 'Big Horn', 'Laramie', 'Rebel', 'Limited', 'TRX'],
    'Dodge Dakota': ['ST', 'SLT', 'Sport', 'Big Horn', 'Laramie', 'TRX'],
    'Dodge Journey': ['SE', 'SXT', 'Crossroad', 'GT', 'R/T'],
    'Dodge Nitro': ['SE', 'SXT', 'SLT', 'RT'],
    'Dodge Avenger': ['SE', 'SXT', 'R/T', 'GT'],
    'Dodge Dart': ['SE', 'SXT', 'Aero', 'GT', 'Limited', 'SRT4'],
    'Dodge Neon': ['SE', 'SXT', 'R/T', 'SRT-4', 'Highline', 'Sport'],
    'Dodge Caliber': ['SE', 'SXT', 'R/T', 'SRT4', 'Mainstreet', 'Heat'],
    'Dodge Magnum': ['SE', 'SXT', 'R/T', 'SRT-8'],
    'Dodge Viper': ['RT/10', 'GTS', 'ACR', 'SRT10', 'TA', 'GTC'],
    'Dodge Stealth': ['Base', 'ES', 'R/T', 'R/T Twin Turbo'],
    'Dodge Caravan': ['SE', 'SXT', 'Crew', 'R/T'],
    'Dodge Grand Caravan': ['SE', 'SXT', 'Crew', 'GT'],
    'Dodge Intrepid': ['Base', 'ES', 'SE', 'R/T'],
    'Dodge Stratus': ['SE', 'SXT', 'ES', 'R/T'],
    'Dodge Omni': ['Base', '024', 'GLH', 'Hatchback'],
    'Dodge Spirit': ['Base', 'ES', 'R/T', 'Highline'],
    'Dodge Coronet': ['R/T', 'Super Bee', '500', 'Deluxe'],

    'Eagle Talon': ['Base', 'ES', 'TSi', 'TSi AWD', 'Turbo'],
    'Eagle Premier': ['Base', 'ES', 'LX', 'Limited'],
    'Eagle Summit': ['Base', 'DL', 'LX', 'ES', 'Wagon', 'Minivan'],
    'Eagle Vision': ['ESi', 'TSi'],
    'Eagle Medallion': ['Base', 'DLX', 'Sedan', 'Wagon'],

    'Ferrari Roma': ['Base', 'Custom'],
    'Ferrari Roma Spider': ['Base', 'Custom'],
    'Ferrari Portofino': ['Base', 'M'],
    'Ferrari California': ['Base', 'GT', 'Handling Speciale'],
    'Ferrari California T': ['Base', 'Handling Speciale'],

    'Ferrari 296 GTB': ['Base', 'Assetto Fiorano'],
    'Ferrari 296 GTS': ['Base', 'Assetto Fiorano'],

    'Ferrari F8 Tributo': ['Base', 'Carbon Pack'],
    'Ferrari F8 Spider': ['Base', 'Carbon Pack'],

    'Ferrari 488 GTB': ['Base', 'Carbon Pack'],
    'Ferrari 488 Spider': ['Base', 'Carbon Pack'],
    'Ferrari 488 Pista': ['Base', 'Piloti Ferrari'],
    'Ferrari 488 Pista Spider': ['Base', 'Piloti Ferrari'],

    'Ferrari SF90 Stradale': ['Base', 'Assetto Fiorano'],
    'Ferrari SF90 Spider': ['Base', 'Assetto Fiorano'],

    'Ferrari 812 Superfast': ['Base', 'Tailor Made'],
    'Ferrari 812 GTS': ['Base', 'Tailor Made'],

    'Ferrari LaFerrari': ['Base', 'Aperta'],
    'Ferrari Enzo': ['Base'],
    'Ferrari F50': ['Base'],
    'Ferrari F40': ['Base', 'LM'],

    'Ferrari Daytona SP3': ['Base'],
    'Ferrari Monza SP1': ['Base'],
    'Ferrari Monza SP2': ['Base'],

    'Ferrari GTC4Lusso': ['Base'],
    'Ferrari GTC4Lusso T': ['Base'],

    'Ferrari FF': ['Base'],
    'Ferrari Purosangue': ['Base'],

    'Ferrari Testarossa': ['Base', '512 TR', '512 M'],
    'Ferrari 512 TR': ['Base'],
    'Ferrari 512 M': ['Base'],

    'Ferrari 348': ['tb', 'ts', 'Spider'],
    'Ferrari 355': ['Berlinetta', 'Spider', 'GTS', 'F1'],
    'Ferrari 360 Modena': ['Base'],
    'Ferrari 360 Spider': ['Base'],
    'Ferrari 430': ['F430', 'Scuderia', 'Spider', '16M'],
    'Ferrari 458 Italia': ['Base'],
    'Ferrari 458 Spider': ['Base'],
    'Ferrari 458 Speciale': ['Speciale', 'Aperta'],

    'Ferrari 599 GTB': ['GTB', 'HGTE'],
    'Ferrari 599 GTO': ['Base'],
    'Ferrari 599 GTB Fiorano': ['Base'],
    'Ferrari 612 Scaglietti': ['Base', 'F1', 'One-to-One'],

    'Ferrari Maranello': ['550', '575M'],
    'Ferrari Superamerica': ['Base'],
    
    'Fiat 500': ['Pop', 'Lounge', 'Sport', 'Cult', 'Rockstar', 'Dolcevita', 'Abarth'],
    'Fiat 500C': ['Pop', 'Lounge', 'Sport', 'Dolcevita', 'Abarth'],
    'Fiat 500L': ['Pop', 'Trekking', 'Cross', 'Lounge'],
    'Fiat 500X': ['Pop', 'Cross', 'Sport', 'City Look', 'Off-Road'],

    'Fiat Panda': ['Pop', 'Easy', 'Lounge', 'City Cross', '4x4', 'Wild'],
    'Fiat Punto': ['Pop', 'Easy', 'Lounge', 'Sport', 'Evo'],
    'Fiat Grande Punto': ['Active', 'Dynamic', 'Sport', 'Emotion'],
    'Fiat Palio': ['Base', 'EL', 'EX', 'Weekend', 'Adventure'],
    'Fiat Uno': ['Attractive', 'Way', 'Sport', 'Vivace'],

    'Fiat Tipo': ['Street', 'City Life', 'Cross', 'Life', 'Sedan', 'Hatchback'],
    'Fiat Linea': ['Active', 'Dynamic', 'Emotion', 'T-Jet'],
    'Fiat Doblo': ['Cargo', 'Panorama', 'Work Up'],
    'Fiat Fiorino': ['Cargo', 'Combi', 'Adventure'],
    'Fiat Qubo': ['Pop', 'Easy', 'Lounge'],

    'Fiat Bravo': ['Active', 'Dynamic', 'Sport', 'Emotion'],
    'Fiat Brava': ['SX', 'ELX', 'GT'],
    'Fiat Stilo': ['Active', 'Dynamic', 'Abarth', 'MW'],
    'Fiat Seicento': ['S', 'SX', 'Sporting', 'Abarth'],
    'Fiat Multipla': ['SX', 'ELX', 'Natural Power'],

    'Fiat Strada': ['Working', 'Freedom', 'Endurance', 'Volcano'],
    'Fiat Toro': ['Endurance', 'Freedom', 'Volcano', 'Ranch', 'Ultra'],
    'Fiat Idea': ['Attractive', 'Essence', 'Adventure'],
    'Fiat Mobi': ['Easy', 'Like', 'Way', 'Trekking'],
    'Fiat Argo': ['Drive', 'Treking', 'HGT', 'Precision'],
    'Fiat Cronos': ['Drive', 'Precision', 'S-Design'],

    'Fiat Albea': ['Base', 'Comfort', 'Luxury'],
    'Fiat Siena': ['EL', 'ELX', 'Attractive', 'Fire'],
    'Fiat Tempra': ['SX', 'SLX', 'Turbo'],
    'Fiat Croma': ['Active', 'Dynamic', 'Emotion', 'Prestige'],

    'Fisker Ocean': ['Sport', 'Ultra', 'Extreme', 'One'],
    'Fisker Ronin': ['Base'],
    'Fisker Alaska': ['Base'],
    'Fisker PEAR': ['Base'],
    'Fisker Orbit': ['Shuttle'],

    'Fisker Karma': ['EcoSport', 'EcoChic', 'EcoStandard'], 
    'Ford Fiesta': ['S', 'SE', 'SEL', 'Titanium', 'ST'],
    'Ford Focus': ['S', 'SE', 'SEL', 'Titanium', 'ST', 'RS'],
    'Ford Fusion': ['S', 'SE', 'SEL', 'Titanium', 'Hybrid', 'Energi'],
    'Ford Taurus': ['SE', 'SEL', 'Limited', 'SHO'],
    'Ford Mustang': ['EcoBoost', 'GT', 'Mach 1', 'Bullitt', 'Shelby GT350', 'Shelby GT500'],
    'Ford GT': ['Base'],

    'Ford EcoSport': ['S', 'SE', 'SES', 'Titanium'],
    'Ford Escape': ['S', 'SE', 'SEL', 'Titanium', 'Hybrid'],
    'Ford Bronco': ['Base', 'Big Bend', 'Black Diamond', 'Outer Banks', 'Badlands', 'Wildtrak', 'Everglades', 'Raptor'],
    'Ford Bronco Sport': ['Base', 'Big Bend', 'Heritage', 'Badlands'],
    'Ford Edge': ['SE', 'SEL', 'Titanium', 'ST'],
    'Ford Explorer': ['Base', 'XLT', 'Limited', 'ST', 'King Ranch', 'Platinum'],
    'Ford Expedition': ['XL', 'XLT', 'Limited', 'Timberline', 'King Ranch', 'Platinum'],

    'Ford Ranger': ['XL', 'XLT', 'Lariat', 'Wildtrak', 'Raptor'],
    'Ford F-150': ['XL', 'XLT', 'Lariat', 'King Ranch', 'Platinum', 'Limited', 'Tremor', 'Raptor'],
    'Ford F-250': ['XL', 'XLT', 'Lariat', 'King Ranch', 'Platinum', 'Limited'],
    'Ford F-350': ['XL', 'XLT', 'Lariat', 'King Ranch', 'Platinum', 'Limited'],

    'Ford Maverick': ['XL', 'XLT', 'Lariat', 'Tremor'],
    'Ford Transit': ['Cargo', 'Passenger', 'Crew'],
    'Ford Transit Connect': ['XL', 'XLT', 'Titanium'],

    'Ford Everest': ['Ambiente', 'Trend', 'Sport', 'Titanium'],
    'Ford Escort': ['Base', 'LX', 'GT'],
    'Ford Mondeo': ['Trend', 'Titanium', 'ST-Line'],
    'Ford S-Max': ['Zetec', 'Titanium', 'Vignale'],
    'Ford Galaxy': ['Zetec', 'Titanium', 'Vignale'],

    'Ford Ka': ['Studio', 'Style', 'Zetec'],
    'Ford C-Max': ['SE', 'SEL', 'Titanium', 'Hybrid'],
    'Ford B-Max': ['Studio', 'Zetec', 'Titanium'],
    'Ford Flex': ['SE', 'SEL', 'Limited'],
    'Ford Five Hundred': ['SE', 'SEL', 'Limited'],

    'Freightliner Cascadia': ['Day Cab', 'Mid-Roof', 'Raised Roof', 'Evo'],
    'Freightliner Columbia': ['Day Cab', 'Sleeper', 'Mid-Roof', 'Raised Roof'],
    'Freightliner Century Class': ['Day Cab', 'Mid-Roof XT', 'Raised Roof'],
    'Freightliner Argosy': ['Cab-Over', 'Sleeper', 'Day Cab'],
    'Freightliner Coronado': ['Day Cab', 'Sleeper', 'SD'],
    'Freightliner FLD': ['112', '120', 'Classic', 'Classic XL'],
    'Freightliner FLB': ['COE', '62', '64'],
    'Freightliner FLC': ['112', '120'],

    'Freightliner M2 106': ['Day Cab', 'Extended Cab', 'Crew Cab'],
    'Freightliner M2 112': ['Day Cab', 'Extended Cab', 'Crew Cab'],

    'Freightliner 108SD': ['Day Cab', 'Set-Forward Axle', 'Set-Back Axle'],
    'Freightliner 114SD': ['Day Cab', 'Set-Forward Axle', 'Set-Back Axle'],
    'Freightliner 122SD': ['Day Cab', 'Sleeper', 'Severe Duty'],

    'Freightliner Sprinter': ['Cargo', 'Crew', 'Passenger', 'Cab Chassis'],
    'Freightliner Business Class': ['M2 106', 'M2 112'],
    'Freightliner EconicSD': ['Refuse Truck', 'Low Entry Cab'],

    'Genesis G70': ['Base', 'Sport', 'Sport Prestige', 'Sport Advanced'],
    'Genesis G80': ['2.5T', '3.5T Sport', 'Prestige', 'Electric'],
    'Genesis G90': ['3.5T', '3.5T E-Supercharger', 'Prestige'],

    'Genesis GV60': ['Advanced', 'Performance'],
    'Genesis GV70': ['2.5T', '3.5T Sport', 'Electrified', 'Sport Prestige'],
    'Genesis GV80': ['2.5T', '3.5T', '3.5T Prestige', 'Coupe'],

    'Genesis X Concept': ['X', 'X Speedium', 'X Convertible'],
    
    'Geo Metro': ['Base', 'Lsi', 'XFi', 'Convertible'],
    'Geo Prizm': ['Base', 'Lsi', 'GSi'],
    'Geo Storm': ['Base', 'GSi', '2+2', 'Wagonback'],
    'Geo Tracker': ['Base', 'Lsi', '2-Door', '4-Door', 'Soft Top', 'Hard Top'],
    'Geo Spectrum': ['Base', 'CL', 'Turbo'],

    'GEM e2': ['Base'],
    'GEM e4': ['Base'],
    'GEM e6': ['Base'],

    'GEM eL XD': ['Base'],
    'GEM eM 1400 LSV': ['Base'],
    'GEM eL': ['Base'],
    'GEM ES': ['Base'],

    'GMC Canyon': ['Elevation', 'AT4', 'Denali'],
    'GMC Sierra 1500': ['Pro', 'SLE', 'Elevation', 'SLT', 'AT4', 'Denali', 'AT4X', 'Denali Ultimate'],
    'GMC Sierra HD': ['Pro', 'SLE', 'SLT', 'AT4', 'Denali', 'Denali Ultimate'],
    'GMC Acadia': ['SLE', 'SLT', 'AT4', 'Denali'],
    'GMC Terrain': ['SLE', 'SLT', 'AT4', 'Denali'],
    'GMC Yukon': ['SLE', 'SLT', 'AT4', 'Denali', 'Denali Ultimate'],
    'GMC Yukon XL': ['SLE', 'SLT', 'AT4', 'Denali', 'Denali Ultimate'],

    'GMC Hummer EV Pickup': ['EV2', 'EV2X', 'EV3X', 'Edition 1'],
    'GMC Hummer EV SUV': ['EV2', 'EV2X', 'EV3X', 'Edition 1'],

    'GMC Safari': ['Base', 'SLE', 'SLT'],
    'GMC Envoy': ['SLE', 'SLT', 'Denali'],
    'GMC Sonoma': ['Base', 'SLS', 'SLT', 'ZR2'],
    'GMC Jimmy': ['Base', 'SLE', 'SLT'],
    'GMC Savana': ['2500', '3500', 'Passenger', 'Cargo'],
    'GMC Typhoon': ['Base'],
    'GMC Syclone': ['Base'],

    'Honda Civic': ['LX', 'Sport', 'EX', 'EX-L', 'Touring', 'Si', 'Type R'],
    'Honda Accord': ['LX', 'Sport', 'EX', 'EX-L', 'Touring', 'Hybrid'],
    'Honda City': ['S', 'V', 'VX', 'ZX'],
    'Honda Fit': ['LX', 'Sport', 'EX', 'EX-L'],
    'Honda Jazz': ['Base', 'V', 'VX', 'ZX'],
    'Honda Insight': ['EX', 'Touring'],
    'Honda Legend': ['Base', 'Hybrid EX', 'Hybrid EX-L'],

    'Honda HR-V': ['LX', 'Sport', 'EX', 'EX-L'],
    'Honda CR-V': ['LX', 'EX', 'EX-L', 'Sport', 'Sport Touring', 'Hybrid'],
    'Honda ZR-V': ['X', 'Z', 'e:HEV'],
    'Honda Passport': ['EX-L', 'TrailSport', 'Elite'],
    'Honda Pilot': ['Sport', 'EX-L', 'TrailSport', 'Touring', 'Elite', 'Black Edition'],

    'Honda Odyssey': ['EX', 'EX-L', 'Touring', 'Elite'],
    'Honda Ridgeline': ['Sport', 'RTL', 'RTL-E', 'Black Edition'],
    'Honda Element': ['LX', 'EX', 'SC'],

    'Honda Freed': ['G', 'Hybrid G', 'Hybrid Modulo X'],
    'Honda Stepwgn': ['Air', 'Spada', 'Spada Premium Line'],
    'Honda S660': ['Alpha', 'Beta', 'Modulo X'],

    'Honda NSX': ['Base', 'Type S'],
    'Honda Brio': ['E', 'S', 'V'],
    'Honda Amaze': ['E', 'S', 'V', 'VX'],
    'Honda WR-V': ['LX', 'EX', 'EX-L'],

    'Honda Elysion': ['X', 'G', 'Prestige'],
    'Honda Crosstour': ['EX', 'EX-L'],
    'Honda Clarity': ['Electric', 'Plug-In Hybrid', 'Fuel Cell'],

    'Honda Beat': ['Base'],
    'Honda Prelude': ['S', 'Si', 'Type S', 'VTEC'],
    'Honda S2000': ['Base', 'CR'],

    'Hummer H1': [
        'Base', 'Wagon', 'Hardtop', 'Slantback', 'Open Top', 'Alpha'
    ],

    'Hummer H2': [
        'Base', 'Adventure', 'Luxury', 'Performance', 'SUT'
    ],

    'Hummer H3': [
        'Base', 'Adventure', 'Luxury', 'Alpha'
    ],

    'Hummer H3T': [
        'Base', 'Adventure', 'Luxury', 'Alpha'
    ],

    'Hyundai Accent': ['SE', 'SEL', 'Limited', 'Sport', 'Blue'],
    'Hyundai Elantra': ['SE', 'SEL', 'Limited', 'Sport', 'N Line', 'Hybrid', 'Plug-in Hybrid'],
    'Hyundai Sonata': ['SE', 'SEL', 'N Line', 'Limited', 'Hybrid', 'Plug-in Hybrid'],
    'Hyundai Azera': ['Base', 'Limited', 'Ultimate'],
    'Hyundai Venue': ['SE', 'SEL', 'Limited', 'Denim'],
    'Hyundai Kona': ['SE', 'SEL', 'Limited', 'N Line', 'Electric'],
    'Hyundai Tucson': ['SE', 'SEL', 'N Line', 'Limited', 'Hybrid', 'Plug-in Hybrid', 'Calligraphy'],
    'Hyundai Santa Fe': ['SE', 'SEL', 'Limited', 'Calligraphy', 'Hybrid', 'Plug-in Hybrid'],
    'Hyundai Palisade': ['SE', 'SEL', 'Limited', 'Calligraphy'],
    'Hyundai Ioniq': ['Hybrid', 'Plug-in Hybrid', 'Electric'],
    'Hyundai Staria': ['Tourer', 'Premium', 'Cargo', 'Business'],
    'Hyundai Nexo': ['Fuel Cell', 'Limited', 'Ultimate'],
    'Hyundai Veloster': ['Turbo', 'Turbo R-Spec', 'Turbo Ultimate', 'N'],
    'Hyundai Getz': ['1.1', '1.3', '1.4'],
    'Hyundai i10': ['Base', 'Magna', 'Sportz', 'Asta'],
    'Hyundai i20': ['Base', 'Magna', 'Asta', 'N Line'],
    'Hyundai i30': ['Base', 'S', 'SX', 'N Line'],
    'Hyundai Matrix': ['Base', 'GL', 'GSi'],
    'Hyundai Tiburon': ['GS', 'GT', 'SE', 'FX'],
    'Hyundai Genesis': ['G70', 'G80', 'G90'],
    'Hyundai Atos': ['Prime', 'Sport', 'Glide'],
    'Hyundai Trajet': ['GL', 'GLS', 'Limited'],
    'Hyundai Santro': ['Xing', 'GL', 'GS', 'Magna', 'Asta'],
    'Hyundai Coupe': ['FX', 'SX', 'SIII'],
    'Hyundai H-1': ['Starex', 'Cargo', 'Tourist'],
    'Hyundai H-100': ['Base', 'Deluxe', 'Truck'],

    'Ineos Grenadier': ['Utility', 'Adventure', 'Commercial', 'Explorer'],

    'Infiniti Q50': ['Pure', 'Luxury', 'Sport', 'Red Sport 400'],
    'Infiniti Q60': ['Pure', 'Luxe', 'Sport', 'Red Sport 400'],
    'Infiniti Q70': ['Base', 'LUXE', 'Sport', 'Hybrid'],
    'Infiniti Q70L': ['Base', 'LUXE', 'Sport', 'Hybrid'],
    'Infiniti QX30': ['Pure', 'Luxury', 'Sport'],
    'Infiniti QX50': ['Pure', 'LUXE', 'Essential', 'Autograph'],
    'Infiniti QX55': ['Essential', 'Sensory', 'Autograph'],
    'Infiniti QX60': ['Pure', 'LUXE', 'Essential', 'Autograph', 'Monograph'],
    'Infiniti QX70': ['Base', 'Journey', 'S', 'Limited'],
    'Infiniti QX80': ['Standard', 'Limited', 'Luxe', 'Monograph'],

    'Infiniti EX35': ['Journey', 'Sport', 'Limited'],
    'Infiniti FX35': ['Base', 'Journey', 'Premium', 'Limited'],
    'Infiniti FX37': ['Base', 'Journey', 'Premium', 'Limited'],
    'Infiniti FX50': ['Base', 'Journey', 'Premium', 'Limited'],
    'Infiniti M30': ['Base', 'Touring', 'Luxury'],
    'Infiniti M35': ['Base', 'Journey', 'Sport', 'Limited'],
    'Infiniti M37': ['Base', 'Journey', 'Sport', 'Limited'],
    'Infiniti M45': ['Base', 'Journey', 'Sport', 'Limited'],
    'Infiniti Q45': ['Base', 'Sport', 'Luxury'],

    'International Scout': ['800', '800A', '800B', '810', '1000', 'II Base', 'II Traveler', 'II Scout II Traveler'],
    'International Scout II': ['Base', 'Traveler', 'Traveler SSII', 'Scout II Rallye', 'Scout II Soft Top'],
    'International Navistar': ['4300', '4900', '5900', '7300', '7400', '9200', '9400'],
    'International LT Series': ['LT625', 'LT625S', 'LT625G', 'LT625AG'],
    'International TranStar': ['8600', '8600B', '8600G', '8600S'],
    'International Durastar': ['4300', '4400', '4900', '5900'],
    'International ProStar': ['122', '122SD', '123', '123SD'],
    'International WorkStar': ['7400', '7600', '7300', '7500'],
    'International HV Series': ['4700', '4900', '5900', '7400'],
    'International S-Series': ['S1700', 'S1800', 'S1900', 'S2000'],
    'International MaxxForce': ['DT', '9', '10', '13', 'DT466', 'DT570'],
    'International PayStar': ['5070', '5600', '5900', '7000'],

    'Isuzu D-Max': ['LS', 'LS-M', 'LS-T', 'X-Series', 'V-Cross', 'Z-Prestige'],
    'Isuzu MU-X': ['LS', 'LS-M', 'LS-T', 'Z-Prestige'],
    'Isuzu Trooper': ['S', 'LS', 'LS-T', 'Limited'],
    'Isuzu Rodeo': ['S', 'LS', 'LX', 'LS-T'],
    'Isuzu Amigo': ['Base', 'S', 'LS', 'LS V6'],
    'Isuzu VehiCROSS': ['Base', 'All Terrain', 'LS'],
    'Isuzu Ascender': ['S', 'LS', 'Limited'],
    'Isuzu F-Series': ['FTR', 'FVR', 'FVR34', 'FRR'],
    'Isuzu N-Series': ['NPR', 'NQR', 'NPR-HD', 'NLR'],
    'Isuzu Elf': ['NPR', 'NQR', 'NKR', 'NLR'],
    'Isuzu Giga': ['CXZ', 'CYZ', 'EXZ', 'FXZ'],
    'Isuzu Journey': ['Standard', 'Luxury', 'Deluxe'],

    'Iveco Daily': ['35S', '40C', '50C', '70C', 'Chassis Cab', 'Van', 'Minibus'],
    'Iveco EuroCargo': ['75E', '90E', '120E', '150E', '180E', 'Chassis Cab'],
    'Iveco Stralis': ['AD', 'AT', 'XP', 'Hi-Way', 'NP'],
    'Iveco Trakker': ['AD', 'AT', 'NP', 'Construction'],
    'Iveco S-Way': ['NP', 'AD', 'AT', 'Heavy Duty', 'Light Duty'],
    'Iveco Magirus': ['Fire Truck', 'Aerial Ladder', 'Rescue'],
    'Iveco PowerDaily': ['35S', '50C', 'Chassis Cab', 'Minibus'],

    'Jaguar XE': ['Pure', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE', 'SV Project 8'],
    'Jaguar XF': ['Premium', 'R-Sport', 'Portfolio', 'S', 'SVR'],
    'Jaguar XJ': ['Base', 'Premium', 'Portfolio', 'SVR'],
    'Jaguar F-Pace': ['S', 'SE', 'HSE', 'R-Dynamic', 'SVR'],
    'Jaguar E-Pace': ['S', 'SE', 'HSE', 'R-Dynamic'],
    'Jaguar I-Pace': ['S', 'SE', 'HSE', 'EV400', 'EV320'],
    'Jaguar F-Type': ['P300', 'P450', 'R', 'R-Dynamic', 'SVR'],
    'Jaguar XK': ['XK8', 'XKR', 'XKR-S'],
    'Jaguar S-Type': ['Base', 'SE', 'R', 'Supercharged'],
    'Jaguar Mark X': ['Base', 'Vanden Plas'],
    'Jaguar C-Type': ['Base', 'Works Replica'],
    'Jaguar D-Type': ['Base', 'Works Replica'],

    'Jeep Wrangler': ['Sport', 'Sport S', 'Sahara', 'Rubicon', 'Willys', 'Moab', 'Freedom', 'High Altitude'],
    'Jeep Wrangler Unlimited': ['Sport', 'Sport S', 'Sahara', 'Rubicon', 'High Altitude', 'Islander'],
    'Jeep Gladiator': ['Sport', 'Sport S', 'Overland', 'Rubicon', 'Mojave', 'Sahara'],
    'Jeep Cherokee': ['Latitude', 'Altitude', 'Limited', 'Trailhawk', 'Overland', 'High Altitude'],
    'Jeep Grand Cherokee': ['Laredo', 'Altitude', 'Limited', 'Trailhawk', 'Overland', 'Summit', 'Summit Reserve', 'Trackhawk'],
    'Jeep Grand Cherokee L': ['Laredo', 'Altitude', 'Limited', 'Overland', 'Summit', 'Summit Reserve'],
    'Jeep Compass': ['Sport', 'Latitude', 'Altitude', 'Limited', 'Trailhawk', 'High Altitude'],
    'Jeep Renegade': ['Sport', 'Latitude', 'Limited', 'Trailhawk', 'Altitude', '80th Anniversary'],
    'Jeep Commander': ['Limited', 'Overland'],
    'Jeep Patriot': ['Sport', 'Latitude', 'High Altitude', 'Limited', 'Trail Rated'],
    'Jeep Liberty': ['Sport', 'Renegade', 'Limited', 'Jet', 'Renegade Special Edition'],
    'Jeep Wagoneer': ['Series I', 'Series II', 'Series III', 'Series III Obsidian'],
    'Jeep Grand Wagoneer': ['Series I', 'Series II', 'Series III', 'Series III Obsidian'],

    'Karma Revero': ['EcoSport', 'EcoChic', 'EcoStandard'],
    'Karma Revero GT': ['Base', 'Carbon Edition', 'GT Luxury'],
    'Karma GS-6': ['Base', 'Luxury', 'Signature Edition'],
    'Karma SC1 Vision': ['Prototype', 'Limited'],

    'Kia Rio': ['LX', 'S', 'EX', 'GT-Line'],
    'Kia Forte': ['FE', 'LXS', 'GT-Line', 'EX', 'GT'],
    'Kia K5': ['LX', 'LXS', 'GT-Line', 'EX', 'GT'],
    'Kia Optima': ['LX', 'S', 'EX', 'SX', 'GT'],
    'Kia Stinger': ['GT-Line', 'GT', 'GT1', 'GT2'],
    'Kia Cerato': ['LX', 'EX', 'SX', 'S'],
    'Kia Cadenza': ['Premium', 'Limited', 'Platinum'],

    'Kia Soul': ['LX', 'S', 'X-Line', 'EX', 'Turbo'],
    'Kia Seltos': ['LX', 'S', 'EX', 'SX', 'X-Line'],
    'Kia Sportage': ['LX', 'S', 'EX', 'SX', 'SX Turbo'],
    'Kia Sorento': ['LX', 'S', 'EX', 'SX', 'SX Prestige'],
    'Kia Telluride': ['LX', 'S', 'EX', 'SX', 'SX Prestige'],
    'Kia Carnival': ['LX', 'EX', 'SX', 'SX Prestige'],

    'Kia EV6': ['Light', 'Wind', 'GT-Line', 'GT'],
    'Kia Niro': ['LX', 'LXS', 'EX', 'Touring', 'EV'],
    'Kia Stonic': ['LX', 'EX', 'GT-Line'],
    'Kia Picanto': ['LX', 'S', 'EX', 'GT-Line'],
    'Kia K900': ['Luxury', 'Technology', 'Ultimate'],

    'Kia Sephia': ['Base', 'LS', 'LX'],
    'Kia Joice': ['Base', 'Premium'],
    'Kia Mohave': ['Luxury', 'Premium', 'Highland', 'Limited'],

    'Laforza LF-01': ['Base', 'Sport', 'Luxury'],
    'Laforza LF-02': ['Base', 'Off-Road', 'Explorer'],
    'Laforza LF-03': ['Base', 'Touring', 'Adventure'],

    'Lamborghini Aventador': ['S', 'SV', 'SVJ', 'Roadster', 'LP 700-4', 'LP 750-4'],
    'Lamborghini Huracan': ['EVO', 'EVO RWD', 'Performante', 'Spyder', 'STO', 'LP 610-4', 'LP 580-2'],
    'Lamborghini Urus': ['Base', 'Performante', 'ST-X', 'ST'],
    'Lamborghini Gallardo': ['LP 550-2', 'LP 560-4', 'LP 570-4 Superleggera', 'Spyder'],
    'Lamborghini Murciélago': ['LP 640', 'LP 670-4 SV', 'Roadster'],
    'Lamborghini Diablo': ['VT', 'SV', 'GTR', 'VT Roadster'],
    'Lamborghini Countach': ['LP400', 'LP500S', '25th Anniversary', 'Quattrovalvole'],
    'Lamborghini Sian': ['FKP 37', 'Roadster'],
    'Lamborghini Revuelto': ['Base', 'Roadster'],
    'Lamborghini Veneno': ['Coupe', 'Roadster'],
    'Lamborghini Centenario': ['Coupe', 'Roadster'],
    'Lamborghini Estoque': ['Concept'],

    'Lancia Ypsilon': ['Silver', 'Gold', 'Platinum', 'MomoDesign', 'Hybrid'],
    'Lancia Delta': ['HPE', 'Integrale', 'HF', 'Sport', 'S'],
    'Lancia Flavia': ['Convertible', 'Coupe', 'LX', 'Touring'],
    'Lancia Thesis': ['Base', 'Emblema', 'Executive', 'LX'],
    'Lancia Lybra': ['S', 'LX', 'TD', 'Station Wagon'],
    'Lancia Phedra': ['Base', 'Platinum', 'Executive'],
    'Lancia Musa': ['Base', 'Platinum', 'Gold'],
    'Lancia Stratos': ['Stradale', 'Stratos HF'],
    'Lancia Fulvia': ['HF', 'Coupe', 'Sport', 'S'],
    'Lancia Beta': ['HPE', 'Coupe', 'Spider', 'Montecarlo'],
    'Lancia Dedra': ['Base', 'LX', 'Integrale', 'HF'],

    'Land Rover Defender': ['90', '110', '130', 'X-Dynamic', 'X-Dventure', 'V8'],
    'Land Rover Discovery': ['S', 'SE', 'HSE', 'HSE Luxury', 'Landmark', 'First Edition'],
    'Land Rover Discovery Sport': ['S', 'SE', 'HSE', 'HSE Luxury', 'R-Dynamic'],
    'Land Rover Range Rover': ['P300', 'P400', 'P525', 'SVAutobiography', 'Autobiography', 'HSE'],
    'Land Rover Range Rover Sport': ['SE', 'HSE', 'Autobiography', 'SVR', 'Dynamic'],
    'Land Rover Range Rover Velar': ['S', 'SE', 'R-Dynamic S', 'R-Dynamic HSE', 'Autobiography'],
    'Land Rover Range Rover Evoque': ['S', 'SE', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE', 'Autobiography'],
    'Land Rover Freelander': ['Base', 'S', 'SE', 'HSE'],
    'Land Rover LR2': ['Base', 'SE', 'HSE'],
    'Land Rover LR3': ['HSE', 'SE', 'HSE Luxury'],
    'Land Rover LR4': ['HSE', 'HSE Luxury', 'Autobiography'],
    'Land Rover Series I': ['80', '86', '88'],
    'Land Rover Series II': ['88', '109'],
    'Land Rover Series III': ['88', '109'],

    'Lexus IS': ['300', '350', 'F Sport', '500 F Sport'],
    'Lexus ES': ['250', '300h', '350', 'F Sport', '300h Luxury'],
    'Lexus GS': ['350', '450h', 'F Sport', 'F'],
    'Lexus LS': ['500', '500h', 'F Sport', '500 Executive'],
    'Lexus NX': ['250', '350', '350h', 'F Sport', '450h+'],
    'Lexus RX': ['350', '350h', '450h', 'F Sport', '500h'],
    'Lexus GX': ['460', '460 Premium', 'Base', 'Luxury'],
    'Lexus LX': ['600', '600 Inspiration', '570', '570 Premium'],
    'Lexus UX': ['200', '250h', 'F Sport', '300e'],
    'Lexus LC': ['500', '500h', 'F Sport', '500 Inspiration'],
    'Lexus RC': ['300', '350', 'F Sport', '500h', 'RC F'],
    'Lexus LM': ['300h', '350', 'Executive', 'Premium'],
    'Lexus HS': ['250h'],
    'Lexus CT': ['200h', 'F Sport'],
    'Lexus RC F': ['Track Edition', 'Carbon Package', 'Base'],
    'Lexus LC F': ['500', '500 Inspiration'],

    'Lincoln Navigator': ['Standard', 'Reserve', 'Black Label', 'L'],
    'Lincoln Aviator': ['Standard', 'Reserve', 'Black Label', 'Grand Touring', 'Aviator Plug-in Hybrid'],
    'Lincoln Corsair': ['Standard', 'Reserve', 'Black Label', 'Grand Touring'],
    'Lincoln Nautilus': ['Standard', 'Reserve', 'Black Label', 'Grand Touring'],
    'Lincoln MKZ': ['Standard', 'Reserve', 'Black Label', 'Hybrid'],
    'Lincoln MKS': ['Base', 'EcoBoost', 'Signature', 'Limited'],
    'Lincoln MKX': ['Standard', 'Reserve', 'Black Label', 'Premiere'],
    'Lincoln MKT': ['Base', 'EcoBoost', 'Reserve', 'Black Label'],
    'Lincoln Continental': ['Standard', 'Reserve', 'Black Label', 'President', 'Coach Door Edition'],
    'Lincoln Town Car': ['Executive', 'Signature', 'Cartier'],
    'Lincoln LS': ['Base', 'Sport', 'Ultimate'],
    'Lincoln Zephyr': ['Standard', 'Luxury', 'Reserve'],

    'Lordstown Endurance': ['Base', 'Pro', 'Fleet'],
    'Lordstown Alpha': ['Prototype', 'Concept'],
    'Lordstown Electric Pickup': ['Standard', 'Extended Range', 'Fleet Edition'],
    'Lordstown Future EV': ['Concept', 'Limited Edition'],

    'Lotus Elise': ['Base', 'Sport', 'Cup', 'SC', 'Final Edition'],
    'Lotus Exige': ['Sport 350', 'Sport 410', 'Cup 430', 'V6 Cup', 'Final Edition'],
    'Lotus Evora': ['Base', 'GT', 'GT410', 'GT430', 'GTE', '400', '414E'],
    'Lotus Emira': ['Base', 'Pirelli', 'V6', 'First Edition'],
    'Lotus Eletre': ['Standard', 'GT', 'First Edition', 'Launch Edition'],
    'Lotus Type 62': ['Race', 'Prototype', 'Limited Edition'],
    'Lotus Europa': ['S', 'SE', 'Special'],
    'Lotus 3-Eleven': ['Base', 'RS', 'Final Edition'],
    'Lotus Evija': ['Base', 'Launch Edition'],

    'Lucid Air': ['Pure', 'Dream Edition', 'Grand Touring', 'Touring', 'GT'],
    'Lucid Gravity': ['Base', 'Performance', 'Launch Edition'],
    'Lucid Project Gravity': ['Prototype', 'Concept'],

    'Mahindra Thar': ['AX', 'AX+ Hardtop', 'LX', 'LX Hardtop', 'Adventure Edition', 'Dark Edition'],
    'Mahindra XUV700': ['MX', 'AX', 'AX7', 'AX7L', 'AX7 Dark', 'AX7L Dark', 'AX7L Max'],
    'Mahindra XUV500': ['W4', 'W6', 'W8', 'W8 AWD', 'W10'],
    'Mahindra Scorpio': ['S3', 'S5', 'S7', 'N', 'N10', 'N8', 'Classic'],
    'Mahindra Scorpio N': ['N4', 'N6', 'N8', 'N10', 'Adventure Edition', 'Dark Edition'],
    'Mahindra Bolero': ['Standard', 'SLX', 'Power+', 'Neo', 'Neo+'],
    'Mahindra Marazzo': ['M2', 'M4', 'M6', 'M8', 'M8 Dual Tone'],
    'Mahindra KUV100': ['K2', 'K4', 'K6', 'K8'],
    'Mahindra KUV100 NXT': ['K2+', 'K4+', 'K6+', 'K8+'],
    'Mahindra TUV300': ['T2', 'T4', 'T6', 'T8'],
    'Mahindra TUV300 Plus': ['T4', 'T6', 'T8'],
    'Mahindra eKUV100': ['Base', 'K6', 'K8'],
    'Mahindra Jeep Roxor': ['Base', 'Mid', 'Premium'],
    'Mahindra Xylo': ['E8', 'E9', 'D2', 'D4', 'D6'],

    'Maserati Ghibli': ['Base', 'GT', 'S', 'Trofeo', 'Hybrid'],
    'Maserati Quattroporte': ['Base', 'S', 'SQ4', 'GTS', 'Trofeo', 'Hybrid'],
    'Maserati Levante': ['Standard', 'S', 'GTS', 'Trofeo', 'Hybrid'],
    'Maserati GranTurismo': ['Sport', 'MC', 'MC Stradale', 'MC Centennial'],
    'Maserati GranCabrio': ['Sport', 'MC', 'MC Centennial'],
    'Maserati MC20': ['Base', 'Cielo', 'Launch Edition'],
    'Maserati Alfieri': ['GT', 'Trofeo', 'Concept'],

    'Maybach S-Class Maybach': ['S 580', 'S 680', 'S 680 4MATIC', 'S 680 Maybach'],
    'Maybach GLS': ['600 4MATIC', '600 4MATIC First Edition', 'Maybach GLS 600'],
    'Maybach Vision Maybach 6': ['Coupe', 'Convertible'],
    'Maybach Pullman': ['Standard', 'Landaulet', 'Luxury'],
    'Maybach 62': ['Base', 'S', 'Landaulet', 'Exelero Edition'],
    'Maybach 57': ['Base', 'S', 'Landaulet'],

    'Mazda Mazda2': ['Sport', 'Touring', 'Grand Touring', 'Skyactiv-G'],
    'Mazda Mazda3': ['Sport', 'Touring', 'Carbon Edition', 'Select', 'Preferred', 'Premium', 'Turbo'],
    'Mazda Mazda6': ['Sport', 'Touring', 'Grand Touring', 'Signature', 'Carbon Edition'],
    'Mazda CX-3': ['Sport', 'Touring', 'Grand Touring', 'Carbon Edition'],
    'Mazda CX-30': ['Base', 'Premium', 'Select', 'Turbo', 'Turbo Premium Plus'],
    'Mazda CX-4': ['2.0L', '2.5L', 'Turbo'],
    'Mazda CX-5': ['Sport', 'Touring', 'Grand Touring', 'Carbon Edition', 'Turbo', 'Signature'],
    'Mazda CX-50': ['2.5 S', '2.5 Turbo', 'Turbo RWD', 'Premium', 'Carbon Edition'],
    'Mazda CX-60': ['Standard', 'M Hybrid', 'Luxury', 'Premium', 'Turbo'],
    'Mazda CX-70': ['Standard', 'Turbo', 'Premium', 'Carbon Edition'],
    'Mazda CX-7': ['i Sport', 'i Touring', 'i Grand Touring', 's Grand Touring'],
    'Mazda CX-8': ['Sport', 'Asaki', 'Takumi', 'Carbon Edition'],
    'Mazda CX-9': ['Sport', 'Touring', 'Grand Touring', 'Signature', 'Carbon Edition'],
    'Mazda MX-5': ['Sport', 'Club', 'Grand Touring', 'RF', 'RF Launch Edition'],
    'Mazda RX-7': ['Base', 'GTU', 'Turbo II', 'Spirit R'],
    'Mazda RX-8': ['Base', 'Touring', 'Grand Touring', 'R3', 'Shinka'],
    'Mazda Mazda5': ['Sport', 'Touring', 'Grand Touring'],
    'Mazda B-Series': ['B2000', 'B2200', 'B2500', 'B3000', 'B4000'],
    'Mazda Premacy': ['Base', 'Sport', 'Luxury', 'Limited'],
    'Mazda MPV': ['LX', 'ES', 'LX Sport', 'Touring', 'Grand Touring'],

    'McLaren 720S': ['Base', 'Performance', 'Spider', 'Track Pack'],
    'McLaren 570S': ['Coupe', 'Spider', 'GT'],
    'McLaren 600LT': ['Coupe', 'Spider', 'Club Sport'],
    'McLaren 650S': ['Coupe', 'Spider', 'Le Mans'],
    'McLaren 675LT': ['Coupe', 'Spider'],
    'McLaren P1': ['Base', 'GTR'],
    'McLaren Senna': ['Base', 'GTR', 'Ultimate Series'],
    'McLaren Speedtail': ['Base', 'Ultimate'],
    'McLaren Artura': ['Base', 'Performance', 'MSO Edition'],
    'McLaren MP4-12C': ['Coupe', 'Spider', 'Track Pack'],
    'McLaren Elva': ['Base', 'MSO Edition'],
    'McLaren GT': ['Base', 'MSO Defined', 'Longtail'],
    'McLaren F1': ['Standard', 'LM', 'GTR'],
    'McLaren 12C Spider': ['Base', 'Track Pack'],

    'Mercedes-Benz A-Class': ['A 180', 'A 200', 'A 220', 'A 250', 'AMG A 35', 'AMG A 45'],
    'Mercedes-Benz B-Class': ['B 180', 'B 200', 'B 250', 'Electric'],
    'Mercedes-Benz C-Class': ['C 180', 'C 200', 'C 300', 'C 300e', 'AMG C 43', 'AMG C 63'],
    'Mercedes-Benz CLA': ['CLA 180', 'CLA 200', 'CLA 250', 'AMG CLA 35', 'AMG CLA 45'],
    'Mercedes-Benz CLS': ['CLS 350', 'CLS 450', 'AMG CLS 53', 'AMG CLS 63'],
    'Mercedes-Benz E-Class': ['E 200', 'E 300', 'E 350', 'E 350e', 'E 450', 'AMG E 53', 'AMG E 63'],
    'Mercedes-Benz G-Class': ['G 350', 'G 500', 'AMG G 63', 'AMG G 65'],
    'Mercedes-Benz GLA': ['GLA 180', 'GLA 200', 'GLA 250', 'AMG GLA 35', 'AMG GLA 45'],
    'Mercedes-Benz GLB': ['GLB 200', 'GLB 250', 'AMG GLB 35'],
    'Mercedes-Benz GLC': ['GLC 200', 'GLC 250', 'GLC 300', 'AMG GLC 43', 'AMG GLC 63'],
    'Mercedes-Benz GLE': ['GLE 350', 'GLE 450', 'AMG GLE 53', 'AMG GLE 63'],
    'Mercedes-Benz GLS': ['GLS 350', 'GLS 450', 'GLS 580', 'Maybach GLS 600', 'AMG GLS 63'],
    'Mercedes-Benz S-Class': ['S 350', 'S 450', 'S 500', 'S 580', 'S 63 AMG', 'S 65 AMG', 'Maybach S 580', 'Maybach S 680'],
    'Mercedes-Benz SL': ['SL 350', 'SL 450', 'SL 500', 'AMG SL 55', 'AMG SL 63'],
    'Mercedes-Benz SLC': ['SLC 180', 'SLC 200', 'SLC 300', 'AMG SLC 43'],
    'Mercedes-Benz SLK': ['SLK 200', 'SLK 250', 'SLK 300', 'AMG SLK 55'],
    'Mercedes-Benz AMG GT': ['GT', 'GT S', 'GT C', 'GT R', 'GT Black Series'],
    'Mercedes-Benz EQC': ['400 4MATIC', 'AMG EQC 43'],
    'Mercedes-Benz EQA': ['250', '350', 'AMG EQA 35'],
    'Mercedes-Benz EQB': ['300 4MATIC', '350 4MATIC'],
    'Mercedes-Benz EQE': ['350', 'EQE 350 4MATIC', 'EQE 500', 'AMG EQE 43', 'AMG EQE 53'],
    'Mercedes-Benz EQS': ['450+', '500', '580', 'AMG EQS 53', 'Maybach EQS 580'],
    'Mercedes-Benz EQV': ['300', '350', 'AMG EQV 53'],
    'Mercedes-Benz Maybach S-Class': ['S 580', 'S 680', 'Pullman', 'Landaulet'],

    'Mercury Cougar': ['Base', 'XR7', 'LS', 'V6', 'XR7 V8'],
    'Mercury Grand Marquis': ['LS', 'GS', 'Premier', 'GS Premium'],
    'Mercury Mariner': ['I4', 'V6', 'Hybrid', 'Premier'],
    'Mercury Milan': ['I4', 'V6', 'Premier', 'Hybrid'],
    'Mercury Monterey': ['Base', 'Luxury', 'Premier'],
    'Mercury Montego': ['I4', 'V6', 'Premier'],
    'Mercury Mountaineer': ['Base', 'Premier', 'Luxury', 'Eddie Bauer', 'Vogue'],
    'Mercury Sable': ['GS', 'LS', 'LS Premium', 'LS V6'],
    'Mercury Capri': ['Base', 'XR2', 'RS', 'Convertible'],
    'Mercury Villager': ['LS', 'LX', 'Sport', 'Touring'],
    'Mercury Marauder': ['GS', 'LS', 'Grand Touring'],

    'Merkur XR4Ti': ['Base', 'Turbo', '5-Speed Manual'],
    'Merkur Scorpio': ['Base', 'LS', 'LS V6'],
    'Merkur Montego': ['Base', 'LS', 'Ghia'],
    'Merkur Cougar': ['Base', 'XR7', 'LS', 'XR7 V8'],

    'MINI Cooper': ['Base', 'Classic', 'Signature', 'Iconic'],
    'MINI Cooper S': ['Base', 'Signature', 'Iconic', 'JCW'],
    'MINI Cooper SE': ['Base', 'Level 2', 'Level 3'],
    'MINI John Cooper Works': ['GP', 'Clubman', 'Countryman', 'Convertible'],
    'MINI Clubman': ['Cooper', 'Cooper S', 'JCW', 'All4'],
    'MINI Countryman': ['Cooper', 'Cooper S', 'JCW', 'All4', 'Plug-in Hybrid'],
    'MINI Convertible': ['Cooper', 'Cooper S', 'JCW'],
    'MINI Paceman': ['Cooper', 'Cooper S', 'JCW'],
    'MINI Coupe': ['Base', 'JCW', 'Cooper S'],
    'MINI Roadster': ['Base', 'JCW', 'Cooper S'],
    'MINI Electric': ['SE', 'JCW SE', 'Level 2'],

    'Mitsubishi Mirage': ['ES', 'LE', 'SE', 'GT', 'G4'],
    'Mitsubishi Mirage G4': ['ES', 'LE', 'SE', 'GT'],
    'Mitsubishi Lancer': ['DE', 'ES', 'SE', 'GT', 'Evolution X', 'Ralliart'],
    'Mitsubishi Lancer Evolution': ['Evolution VIII', 'Evolution IX', 'Evolution X', 'MR', 'GSR'],
    'Mitsubishi Outlander': ['ES', 'LE', 'SE', 'GT', 'Sport', 'PHEV'],
    'Mitsubishi Outlander PHEV': ['ES', 'SE', 'SEL', 'GT'],
    'Mitsubishi Eclipse Cross': ['ES', 'LE', 'SE', 'SEL', 'GT'],
    'Mitsubishi ASX': ['ES', 'LE', 'Exceed', 'Black Edition'],
    'Mitsubishi RVR': ['ES', 'SE', 'GT', 'Black Edition'],
    'Mitsubishi Pajero': ['GLX', 'GLS', 'Exceed', 'Super Select', 'Final Edition'],
    'Mitsubishi Pajero Sport': ['GLS', 'Exceed', 'Ultimate', 'GT'],
    'Mitsubishi Montero': ['LS', 'Limited', 'Sport', 'SE'],
    'Mitsubishi Montero Sport': ['GLS', 'Exceed', 'Ultimate', 'GT'],
    'Mitsubishi i-MiEV': ['Base', 'LE', 'SE'],
    'Mitsubishi L200': ['GL', 'GLX', 'Sport', 'Warrior', 'Triton Athlete'],
    'Mitsubishi Triton': ['GL', 'GLX', 'GLS', 'Exceed', 'Athlete'],
    'Mitsubishi Eclipse': ['GS', 'GT', 'Spyder', 'Targa'],

    'Nissan Versa': ['S', 'SV', 'SR', 'Note', 'Plus'],
    'Nissan Altima': ['S', 'SV', 'SL', 'SR', 'Platinum'],
    'Nissan Maxima': ['S', 'SV', 'SL', 'SR', 'Platinum'],
    'Nissan Sentra': ['S', 'SV', 'SR', 'SR Turbo', 'Nismo'],
    'Nissan 370Z': ['Base', 'Sport', 'Touring', 'Nismo'],
    'Nissan 350Z': ['Base', 'Touring', 'Grand Touring', 'Track'],
    'Nissan GT-R': ['Pure', 'Premium', 'Nismo', 'Track Edition'],
    'Nissan Leaf': ['S', 'SV', 'SL', 'Plus', 'Plus SL'],
    'Nissan Kicks': ['S', 'SV', 'SR', 'SR Midnight Edition'],
    'Nissan Juke': ['S', 'SV', 'Nismo', 'SL'],
    'Nissan Rogue': ['S', 'SV', 'SL', 'Platinum', 'Sport'],
    'Nissan Rogue Sport': ['S', 'SV', 'SL'],
    'Nissan Murano': ['S', 'SV', 'SL', 'Platinum'],
    'Nissan Pathfinder': ['S', 'SV', 'SL', 'Platinum', 'Rock Creek'],
    'Nissan Armada': ['SV', 'SL', 'Platinum', 'Platinum Reserve'],
    'Nissan Titan': ['S', 'SV', 'PRO-4X', 'Platinum Reserve', 'XD'],
    'Nissan Frontier': ['S', 'SV', 'PRO-4X', 'SL', 'Desert Runner'],
    'Nissan NV200': ['Compact Cargo', 'Taxi', 'Van'],
    'Nissan NV Cargo': ['Standard Roof', 'High Roof', 'Extended Cargo'],
    'Nissan NV Passenger': ['8-Passenger', '12-Passenger', 'Luxury'],
    'Nissan 370Z Roadster': ['Base', 'Sport', 'Touring', 'Nismo'],
    'Nissan GT-R Nismo': ['Coupe', 'Track Edition'],

    'Oldsmobile Alero': ['GX', 'GL', 'XE', 'GT'],
    'Oldsmobile Aurora': ['Base', '4.0', 'Premium'],
    'Oldsmobile Bravada': ['Base', 'Luxury', 'Limited'],
    'Oldsmobile Cutlass': ['Ciera', 'Supreme', 'S', 'SL', 'GL'],
    'Oldsmobile Cutlass Ciera': ['Base', 'S', 'SL', 'LS'],
    'Oldsmobile Cutlass Supreme': ['SL', 'LS', 'Classic', 'Coupe', 'Convertible'],
    'Oldsmobile Silhouette': ['GL', 'LS', 'SE', 'Exclusive'],
    'Oldsmobile Intrigue': ['S', 'GX', 'GL', 'GXS'],
    'Oldsmobile Eighty-Eight': ['LS', 'LSS', 'Royal', 'Custom', 'Delta'],
    'Oldsmobile Ninety-Eight': ['LSS', 'Regency', 'T-Type', 'Ultra', 'Delta'],
    'Oldsmobile Delta 88': ['Base', 'Royal', 'Custom', 'LS', 'LSS'],
    'Oldsmobile Toronado': ['Base', 'LX', 'S', 'Trofeo'],
    'Oldsmobile Omega': ['Base', 'SX', 'SL', 'GS'],

    'Peugeot 208': ['Active', 'Allure', 'GT Line', 'GT'],
    'Peugeot 2008': ['Active', 'Allure', 'GT Line', 'GT'],
    'Peugeot 308': ['Access', 'Active', 'Allure', 'GT Line', 'GT'],
    'Peugeot 3008': ['Active', 'Allure', 'GT Line', 'GT', 'Hybrid'],
    'Peugeot 5008': ['Active', 'Allure', 'GT Line', 'GT', 'Hybrid'],
    'Peugeot 508': ['Active', 'Allure', 'GT Line', 'GT', 'Hybrid'],
    'Peugeot Rifter': ['Standard', 'Allure', 'GT Line', 'GT'],
    'Peugeot Traveller': ['Standard', 'Business', 'Allure', 'GT'],
    'Peugeot Partner': ['Standard', 'Tepee', 'Allure', 'GT'],
    'Peugeot Expert': ['Standard', 'Business', 'Premium', 'GT'],
    'Peugeot RCZ': ['Base', 'GT', 'R', 'R-GT'],
    'Peugeot iOn': ['Base', 'Active', 'Allure'],
    'Peugeot e-208': ['Active', 'Allure', 'GT Line', 'GT'],
    'Peugeot e-2008': ['Active', 'Allure', 'GT Line', 'GT'],

    'Plymouth Horizon': ['Base', 'TC3', 'America', 'GL', 'DLX'],
    'Plymouth Voyager': ['Base', 'LE', 'LX', 'SE', 'ES'],
    'Plymouth Breeze': ['Base', 'LX', 'LE', 'ES'],
    'Plymouth Neon': ['Base', 'LX', 'Sport', 'SE'],
    'Plymouth Acclaim': ['Base', 'LE', 'LX', 'ES'],
    'Plymouth Grand Voyager': ['SE', 'LE', 'LX', 'ES'],
    'Plymouth Reliant': ['Base', 'SE', 'LX', 'LS', 'Custom'],
    'Plymouth Sundance': ['Base', 'LE', 'LX', 'Turbo'],
    'Plymouth Colt': ['Base', 'Custom', 'GL', 'GT'],
    'Plymouth Barracuda': ['Base', 'Formula S', 'GTX', 'R/T'],
    'Plymouth Fury': ['Base', 'Gran Fury', 'VIP', 'Sport Fury', 'VIP LX'],
    'Plymouth Valiant': ['Base', 'Custom', 'Signet', 'GT'],
    'Plymouth Duster': ['Base', 'GT', 'Sport', '340'],
    'Plymouth Road Runner': ['Base', 'GT', 'Superbird', 'R/T'],
    'Plymouth Fifth Avenue': ['Base', 'LE', 'LX', 'Brougham'],
    'Plymouth Laser': ['Base', 'RS', 'RS Turbo', 'ZR'],
    'Plymouth Proton': ['Base', 'GTi', 'Turbo'],
    'Plymouth Prowler': ['Base', 'LE', 'Special Edition'],

    'Polestar Polestar 1': ['Base', 'Launch Edition', 'Carbon Edition'],
    'Polestar Polestar 2': ['Standard', 'Long Range Single Motor', 'Long Range Dual Motor', 'Performance', 'Dual Motor Performance'],
    'Polestar Polestar 3': ['Standard', 'Long Range', 'Performance', 'Launch Edition'],
    'Polestar Polestar 4': ['Standard', 'Performance', 'Launch Edition'],
    'Polestar Polestar 5': ['Standard', 'Performance', 'Launch Edition'],
    'Polestar Polestar 6': ['Roadster', 'Performance', 'Launch Edition'],

    'Pontiac G6': ['Base', 'GT', 'GTP', 'Convertible'],
    'Pontiac G8': ['Base', 'GT', 'GXP'],
    'Pontiac Grand Am': ['SE', 'GT', 'GT1', 'GT2'],
    'Pontiac Grand Prix': ['Base', 'GT', 'GTP', 'GXP', 'SE'],
    'Pontiac Sunfire': ['Base', 'SE', 'GT', 'Coupe', 'Convertible'],
    'Pontiac Solstice': ['Base', 'GXP', 'Roadster', 'Coupe'],
    'Pontiac Firebird': ['Base', 'Formula', 'Trans Am', 'WS6', 'Convertible'],
    'Pontiac Bonneville': ['Base', 'SSEi', 'GXP', 'SE', 'Limited'],
    'Pontiac Aztek': ['Base', 'Sport', 'GT', 'PPE'],
    'Pontiac Torrent': ['Base', 'GT', 'GXP'],
    'Pontiac Vibe': ['Base', 'GT', 'AWD'],
    'Pontiac LeMans': ['Base', 'GTO', 'SE', 'Sport'],
    'Pontiac Fiero': ['Base', 'GT', 'SE', 'Formula'],
    'Pontiac GTO': ['Base', 'Manual', 'Automatic', 'Judge'],
    'Pontiac Montana': ['Base', 'Sport', 'SV6', 'Extended'],

    'Porsche 911': ['Carrera', 'Carrera S', 'Carrera 4', 'Carrera 4S', 'Targa', 'Turbo', 'Turbo S', 'GT3', 'GT3 RS', 'GT2 RS', 'Speedster'],
    'Porsche 718': ['Boxster', 'Boxster S', 'Boxster GTS', 'Cayman', 'Cayman S', 'Cayman GTS', 'GT4'],
    'Porsche Cayenne': ['Base', 'S', 'E-Hybrid', 'GTS', 'Turbo', 'Turbo S E-Hybrid', 'Coupe', 'Coupe GTS', 'Coupe Turbo'],
    'Porsche Macan': ['Base', 'S', 'GTS', 'Turbo', 'Turbo Performance Package'],
    'Porsche Panamera': ['Standard', '4', '4S', 'GTS', 'Turbo', 'Turbo S', 'Executive', 'Sport Turismo', 'E-Hybrid'],
    'Porsche Taycan': ['4S', 'Turbo', 'Turbo S', 'GTS', 'Cross Turismo', 'GTS Sport Turismo'],
    'Porsche Boxster': ['Base', 'S', 'GTS', 'Spyder'],
    'Porsche Cayman': ['Base', 'S', 'GTS', 'GT4'],
    'Porsche 918 Spyder': ['Base', 'Weissach Package', 'Hybrid Performance'],
    'Porsche Carrera GT': ['Standard'],

    'Ram 1500': ['Tradesman', 'Big Horn', 'Laramie', 'Rebel', 'Limited', 'Longhorn', 'TRX'],
    'Ram 2500': ['Tradesman', 'Big Horn', 'Laramie', 'Limited', 'Power Wagon', 'Rebel'],
    'Ram 3500': ['Tradesman', 'Big Horn', 'Laramie', 'Limited', 'Chassis Cab', 'Rebel'],
    'Ram 4500': ['Chassis Cab', 'SLT', 'Laramie'],
    'Ram 5500': ['Chassis Cab', 'SLT', 'Laramie'],
    'Ram ProMaster': ['1500', '2500', '3500', 'Window Van', 'Cargo Van', 'Chassis Cab'],
    'Ram ProMaster City': ['Tradesman', 'SLT', 'Cargo Van'],
    'Ram Dakota': ['SLT', 'Laramie', 'Sport', 'Big Horn'],
    'Ram Charger': ['Base', 'SE', 'SLT', 'R/T', 'Sport'],
    'Ram 1500 Classic': ['Tradesman', 'Big Horn', 'Laramie', 'Warlock', 'Rebel'],

    'Renault Clio': ['Life', 'Zen', 'Intens', 'RS Line', 'E-Tech'],
    'Renault Captur': ['Life', 'Zen', 'Intens', 'RS Line', 'E-Tech'],
    'Renault Megane': ['Life', 'Zen', 'Intens', 'RS', 'RS Line', 'E-Tech'],
    'Renault Talisman': ['Life', 'Zen', 'Intens', 'Initiale Paris', 'E-Tech'],
    'Renault Kadjar': ['Life', 'Zen', 'Intens', 'RS Line', 'E-Tech'],
    'Renault Koleos': ['Life', 'Zen', 'Intens', 'Initiale Paris', 'E-Tech'],
    'Renault Scenic': ['Life', 'Zen', 'Intens', 'RS Line', 'E-Tech'],
    'Renault Espace': ['Zen', 'Intens', 'Initiale Paris', 'E-Tech'],
    'Renault Kangoo': ['Express', 'Authentique', 'Life', 'Ze E-Tech'],
    'Renault Master': ['Chassis Cab', 'Van', 'Minibus', 'Furgon'],
    'Renault Trafic': ['Van', 'Crew Van', 'Passenger', 'SpaceClass'],
    'Renault Twizy': ['Urban', 'Technic', 'Intens'],
    'Renault Zoe': ['Life', 'Zen', 'R135', 'E-Tech', 'Iconic'],
    
    'Rivian R1T': ['Explore', 'Adventure', 'Launch Edition', 'Launch Edition Explore', 'Launch Edition Adventure', 'R1T Max Pack'],
    'Rivian R1S': ['Explore', 'Adventure', 'Launch Edition', 'Launch Edition Explore', 'Launch Edition Adventure', 'R1S Max Pack'],

    'Rolls-Royce Phantom': ['Standard', 'Extended Wheelbase', 'Black Badge', 'Series II', 'Series III'],
    'Rolls-Royce Ghost': ['Series I', 'Series II', 'Series III', 'Black Badge'],
    'Rolls-Royce Wraith': ['Base', 'Black Badge'],
    'Rolls-Royce Dawn': ['Base', 'Black Badge'],
    'Rolls-Royce Cullinan': ['Standard', 'Black Badge'],
    'Rolls-Royce Spectre': ['Standard', 'Black Badge'],
    'Rolls-Royce Silver Shadow': ['Standard', 'Series II'],
    'Rolls-Royce Silver Cloud': ['I', 'II', 'III', 'IV', 'V'],
    'Rolls-Royce Corniche': ['I', 'II', 'III', 'IV', 'V', 'VI', 'Convertible'],
    'Rolls-Royce Silver Spur': ['Standard', 'Long Wheelbase', 'Park Ward Edition'],
    'Rolls-Royce Camargue': ['Base', 'Limited Edition'],
    'Rolls-Royce Silver Seraph': ['Standard', 'Long Wheelbase'],
    'Rolls-Royce Sweptail': ['One-Off'],

    'Saab 9-3': ['Linear', 'Vector', 'Arc', 'Sport', 'Aero', 'SE', 'Griffin'],
    'Saab 9-5': ['Linear', 'Vector', 'Arc', 'SE', 'Aero', 'Combi'],
    'Saab 900': ['Base', 'S', 'SE', 'Turbo', 'Turbo Convertible', 'Turbo Coupe'],
    'Saab 9000': ['CS', 'CD', 'CSE', 'Aero', 'Turbo'],
    'Saab Sonett': ['II', 'III', 'V4', 'Turbo'],
    'Saab 99': ['GL', 'GLS', 'Turbo', 'Combi Coupe'],
    'Saab 96': ['Standard', 'DL', 'V4', 'Monte Carlo'],
    'Saab 90': ['Base', 'SE', 'Turbo', 'Combi'],

    'Saturn S-Series': ['SC', 'SL', 'SW', 'SL1', 'SL2', 'SC1', 'SC2', 'SW1', 'SW2'],
    'Saturn L-Series': ['L100', 'L200', 'L300', 'L300 XE', 'L300 GS'],
    'Saturn Ion': ['Quad Coupe', 'Sedan', 'Red Line', 'Base', 'Level'],
    'Saturn Aura': ['XE', 'XR', 'XE V6', 'XR V6', 'XE Hybrid'],
    'Saturn Sky': ['Base', 'Red Line', 'Special Edition', 'Launch Edition'],
    'Saturn Vue': ['XE', 'XM', 'XR', 'Red Line', 'Hybrid'],
    'Saturn Outlook': ['XR', 'XR AWD', 'Red Line', 'XE'],
    'Saturn Relay': ['Base', 'XR', 'XR AWD'],
    'Saturn SC': ['SC1', 'SC2', 'SC Red Line'],
    'Saturn SL': ['SL1', 'SL2', 'SL Red Line'],
    'Saturn SW': ['SW1', 'SW2', 'SW Red Line'],
    'Saturn LW': ['LW1', 'LW2'],

    'Smart Fortwo': ['Pure', 'Passion', 'Prime', 'Proxy', 'Edition', 'BRABUS'],
    'Smart Forfour': ['Pure', 'Passion', 'Prime', 'Proxy', 'BRABUS'],
    'Smart Roadster': ['Base', 'Coupe', 'Cabrio', 'Brabus'],
    'Smart Cabrio': ['Base', 'Passion', 'Prime', 'Brabus'],
    'Smart EQ Fortwo': ['Passion', 'Prime', 'BRABUS', 'Edition'],
    'Smart EQ Forfour': ['Passion', 'Prime', 'BRABUS', 'Edition'],

    'Spartan Fire Trucks': ['Metro Star', 'Metro Star XP', 'Metro Star XL', 'Gladiator', 'Saber', 'ERV'],
    'Spartan Gladiator': ['Chassis Cab', '4x2', '4x4', 'Custom'],
    'Spartan Metro Star': ['Standard', 'Extended', 'Custom'],
    'Spartan Metro Star XP': ['Standard', 'Extended', 'Custom'],
    'Spartan Metro Star XL': ['Standard', 'Extended', 'Custom'],

    'Sterling Acterra': ['Standard', 'Crew Cab', 'Extended Cab', 'Chassis Cab'],
    'Sterling A9500': ['Day Cab', 'Sleeper Cab', 'Chassis Cab'],
    'Sterling A9513': ['Day Cab', 'Sleeper Cab', 'Chassis Cab'],
    'Sterling Bullet': ['Standard', 'Heavy Duty', 'Custom'],
    'Sterling L7500': ['Standard', 'Heavy Duty', 'Dump', 'Chassis Cab'],
    'Sterling LT9500': ['Standard', 'Heavy Duty', 'Dump', 'Chassis Cab'],
    'Sterling A-Line': ['Base', 'Custom', 'Heavy Duty'],
    'Sterling Truck': ['Standard', 'Heavy Duty', 'Custom'],

    'Subaru Impreza': ['Base', 'Premium', 'Sport', 'Limited', 'WRX', 'WRX STI'],
    'Subaru WRX': ['Base', 'Premium', 'Limited', 'STI', 'STI Limited', 'STI Type RA'],
    'Subaru WRX STI': ['Base', 'Limited', 'Type RA', 'S209', 'STI Spec C'],
    'Subaru Legacy': ['Base', 'Premium', 'Limited', '2.5i', '3.6R', 'Touring'],
    'Subaru Outback': ['Base', 'Premium', 'Limited', 'Touring', 'Onyx Edition', 'Wilderness'],
    'Subaru Forester': ['Base', 'Premium', 'Sport', 'Limited', 'Touring', 'Wilderness'],
    'Subaru Crosstrek': ['Base', 'Premium', 'Sport', 'Limited', 'Hybrid', 'Wilderness'],
    'Subaru BRZ': ['Base', 'Premium', 'Limited', 'tS', 'Series.Gray', 'Series.Yellow'],
    'Subaru Ascent': ['Base', 'Premium', 'Limited', 'Touring', 'Onyx Edition', 'Wilderness'],
    'Subaru Tribeca': ['Base', 'Limited', 'Special Edition'],
    'Subaru SVX': ['Base', 'Limited'],
    'Subaru Justy': ['Base', 'GL', 'GLI'],
    'Subaru Baja': ['Base', 'S', 'Sport', 'Turbo'],

    'Suzuki Swift': ['GA', 'GL', 'GLX', 'Sport', 'RS'],
    'Suzuki Vitara': ['GL', 'GLX', 'S', 'Turbo', 'AllGrip'],
    'Suzuki Jimny': ['Standard', 'Xtreme', 'Urban', 'Sierra', 'Hard Top'],
    'Suzuki Baleno': ['GA', 'GL', 'GLX', 'RS'],
    'Suzuki Celerio': ['GA', 'GL', 'X', 'Xpress'],
    'Suzuki S-Cross': ['GL', 'GLX', 'Alpha', 'AllGrip'],
    'Suzuki Alto': ['Base', 'VXR', 'VXL', 'VX', 'Limited Edition'],
    'Suzuki Ertiga': ['GA', 'GL', 'GLX', 'RS', 'Sport'],
    'Suzuki XL7': ['GL', 'GLX', 'Alpha', 'Limited'],
    'Suzuki Grand Vitara': ['Base', 'XL-7', 'XL-7 V6', 'AllGrip'],
    'Suzuki Kizashi': ['S', 'SX', 'GTS', 'SE'],
    'Suzuki Across': ['Base', 'Style', 'Comfort', 'Luxury', 'Sport'],

    'Tesla Model S': ['Long Range', 'Plaid', 'Standard Range', 'Performance', 'Dual Motor AWD'],
    'Tesla Model 3': ['Standard Range Plus', 'Long Range AWD', 'Performance', 'Dual Motor AWD'],
    'Tesla Model X': ['Long Range', 'Plaid', 'Dual Motor AWD', 'Performance'],
    'Tesla Model Y': ['Long Range AWD', 'Performance', 'Standard Range', 'Dual Motor'],
    'Tesla Roadster': ['Base', 'Founders Series', 'Sport', 'Touring'],
    'Tesla Cybertruck': ['Single Motor RWD', 'Dual Motor AWD', 'Tri Motor AWD', 'Cyberquad'],
    'Tesla Semi': ['Standard', 'Plaid', 'Extended Range'],
    'Tesla Model S Plaid': ['Plaid', 'Plaid+'],
    'Tesla Model X Plaid': ['Plaid', 'Plaid+'],

    'Toyota Corolla': ['L', 'LE', 'SE', 'XSE', 'XLE', 'Hybrid', 'Apex'],
    'Toyota Camry': ['LE', 'SE', 'XSE', 'XLE', 'TRD', 'Hybrid'],
    'Toyota Avalon': ['XLE', 'Limited', 'Touring', 'TRD', 'Hybrid'],
    'Toyota Yaris': ['L', 'LE', 'XLE', 'GR Yaris'],
    'Toyota Supra': ['2.0', '3.0', 'A91', 'Launch Edition'],
    'Toyota 86': ['Base', 'GT', 'Special Edition'],
    'Toyota GR86': ['Base', 'Premium', 'Special Edition'],
    'Toyota Sienna': ['LE', 'XLE', 'Limited', 'Platinum', 'XSE'],
    'Toyota Highlander': ['L', 'LE', 'XLE', 'Limited', 'Platinum', 'Hybrid'],
    'Toyota 4Runner': ['SR5', 'Trail', 'TRD Off-Road', 'TRD Pro', 'Limited', 'Nightshade'],
    'Toyota RAV4': ['LE', 'XLE', 'XLE Premium', 'Adventure', 'TRD Off-Road', 'Limited', 'Hybrid', 'Prime'],
    'Toyota Venza': ['LE', 'XLE', 'Limited', 'Platinum'],
    'Toyota Sequoia': ['SR5', 'TRD Pro', 'Limited', 'Platinum', 'Nightshade'],
    'Toyota Land Cruiser': ['Base', 'Heritage Edition', 'GX', 'VX'],
    'Toyota Tacoma': ['SR', 'SR5', 'TRD Sport', 'TRD Off-Road', 'Limited', 'TRD Pro'],
    'Toyota Tundra': ['SR', 'SR5', 'Limited', 'Platinum', '1794 Edition', 'TRD Pro'],
    'Toyota C-HR': ['XLE', 'XLE Premium', 'Limited', 'Nightshade'],
    'Toyota bZ4X': ['Standard', 'XLE', 'Limited', 'XSE'],
    'Toyota bZ4X Prime': ['Standard', 'XLE', 'Limited'],
    'Toyota Mirai': ['XLE', 'Limited', 'XSE'],
    'Toyota Prius': ['L Eco', 'LE', 'XLE', 'Limited', 'Nightshade'],
    'Toyota Prius Prime': ['LE', 'XLE', 'Limited', 'Prime Advanced'],
    'Toyota Crown': ['Athlete', 'RS', 'Platinum', 'Hybrid'],

    'Triumph Bonneville': ['T100', 'T120', 'Bobber', 'Speedmaster', 'Street Twin', 'Black', 'Special Edition'],
    'Triumph Thruxton': ['R', 'RS', '1200', 'Factory'],
    'Triumph Street Twin': ['Standard', 'Limited Edition', 'Black'],
    'Triumph Street Triple': ['R', 'RS', 'RS Low', 'S', 'RS 765'],
    'Triumph Tiger': ['900 GT', '900 Rally', '1200 GT', '1200 Rally', 'Sport', 'Explorer'],
    'Triumph Speed Triple': ['RS', 'RR', 'S', 'R'],
    'Triumph Rocket 3': ['R', 'GT', 'TFC'],
    'Triumph Scrambler': ['1200 XE', '1200 XC', '900', 'Urban Enduro'],
    'Triumph Tiger Explorer': ['Base', 'XRx', 'XRT', 'XCa', 'XCa Limited'],
    'Triumph Daytona': ['675', '955i', 'Moto2', 'Sprint', 'RS'],
    'Triumph Sprint': ['ST', 'RS', 'GT', 'R'],
    'Triumph America': ['Standard', 'Deluxe', 'Special Edition'],

    'TVR Chimaera': ['450 SE', '450 SX', '500 SE', '500 SX'],
    'TVR Cerbera': ['Speed Six', 'T400R', 'T440R', 'S'],
    'TVR Tuscan': ['S', 'S2', 'S3', 'Speed Six', 'Turbo'],
    'TVR Griffith': ['500', '550', 'SV'],
    'TVR Sagaris': ['Standard', 'Race', 'Cup Edition'],
    'TVR T350': ['Standard', 'Sport', 'S', 'Coupe'],
    'TVR Typhon': ['Standard', 'V8', 'Track Edition'],
    'TVR Tamora': ['Base', 'Special Edition'],
    'TVR 450SE': ['Base', 'Sport', 'SX'],
    'TVR 450SX': ['Base', 'SX', 'SE'],
    'TVR 450SEAC': ['Standard', 'Limited Edition'],

    'VinFast Fadil': ['Base', 'Plus', 'Premium'],
    'VinFast Lux A2.0': ['Base', 'Plus', 'Premium', 'VinFast Sport'],
    'VinFast Lux SA2.0': ['Base', 'Plus', 'Premium', 'VinFast Sport'],
    'VinFast VF e34': ['Standard', 'Plus', 'Premium'],
    'VinFast VF 8': ['Eco', 'Plus', 'Premium', 'Performance'],
    'VinFast VF 9': ['Eco', 'Plus', 'Premium', 'Performance', 'President'],
    'VinFast President': ['Limited', 'Luxury', 'Special Edition'],

    'Volkswagen Golf': ['S', 'SE', 'SEL', 'GTI', 'Golf R', 'Alltrack', 'e-Golf'],
    'Volkswagen Polo': ['Trendline', 'Comfortline', 'Highline', 'GTI'],
    'Volkswagen Passat': ['S', 'SE', 'R-Line', 'SEL', 'Alltrack', 'GTE'],
    'Volkswagen Jetta': ['S', 'SE', 'SEL', 'GLI', 'R-Line'],
    'Volkswagen Arteon': ['SE', 'SEL', 'SEL R-Line', 'R'],
    'Volkswagen Tiguan': ['S', 'SE', 'SEL', 'R-Line', 'Allspace'],
    'Volkswagen Touareg': ['Base', 'R-Line', 'V8', 'Executive'],
    'Volkswagen T-Cross': ['Life', 'Style', 'R-Line'],
    'Volkswagen Taos': ['S', 'SE', 'SEL', 'R-Line'],
    'Volkswagen ID.3': ['Pure', 'Pro', 'Tour', 'GTX'],
    'Volkswagen ID.4': ['Pro', 'Pro S', 'Xtreme', 'GTX', '1st Edition'],
    'Volkswagen ID. Buzz': ['Cargo', 'Passenger', 'Max'],
    'Volkswagen Beetle': ['S', 'SE', 'Final Edition', 'Turbo'],
    'Volkswagen Atlas': ['S', 'SE', 'SEL', 'SEL Premium', 'Cross Sport'],
    'Volkswagen Amarok': ['Trendline', 'Highline', 'Aventura', 'V6'],
    'Volkswagen CC': ['Comfort', 'Sport', 'R-Line'],
    'Volkswagen Up!': ['Move', 'High', 'GTI', 'White'],
    
    'Volvo XC40': ['Momentum', 'R-Design', 'Inscription', 'Recharge Pure Electric'],
    'Volvo XC60': ['Momentum', 'R-Design', 'Inscription', 'Recharge Plug-in Hybrid'],
    'Volvo XC90': ['Momentum', 'R-Design', 'Inscription', 'Recharge Plug-in Hybrid', 'Excellence'],
    'Volvo S60': ['Momentum', 'R-Design', 'Inscription', 'Polestar Engineered'],
    'Volvo S90': ['Momentum', 'R-Design', 'Inscription', 'Recharge Plug-in Hybrid', 'Polestar Engineered'],
    'Volvo V40': ['Momentum', 'R-Design', 'Inscription'],
    'Volvo V60': ['Momentum', 'R-Design', 'Inscription', 'Recharge Plug-in Hybrid'],
    'Volvo V90': ['Momentum', 'R-Design', 'Inscription', 'Recharge Plug-in Hybrid'],
    'Volvo V90 Cross Country': ['Momentum', 'R-Design', 'Inscription'],
    'Volvo C40': ['Pure Electric', 'Recharge', 'R-Design'],
    'Volvo C70': ['T5', 'T5 AWD', 'Convertible'],
    'Volvo S80': ['T5', 'T6', 'Inscription', 'Executive'],
    'Volvo V70': ['Base', 'Comfort', 'SE', 'R-Design', 'XC'],
    'Volvo S40': ['Base', 'SE', 'SE Lux', 'R-Design'],
    'Volvo V50': ['Base', 'SE', 'SE Lux', 'R-Design'],

    'Yugo GV': ['Base', 'Standard', 'GL', 'LX'],
    'Yugo GVX': ['Base', 'GL', 'LX', 'City'],
    'Yugo GVX Limited': ['Limited Edition'],
    'Yugo Koral': ['Base', 'GL', 'LX'],
    'Yugo Florida': ['Standard', 'GL', 'LX'],
    'Yugo 45': ['Standard', 'GL', 'LX'],
    'Yugo 55': ['Standard', 'GL', 'LX'],
    'Yugo 65': ['Standard', 'GL', 'LX'],
    'Yugo GVX City': ['City Edition'],
    'Yugo GVX Sport': ['Sport Edition', 'Turbo'],

    'Zeekr 001': ['Standard', 'Performance', 'Launch Edition', 'Extended Range'],
    'Zeekr 009': ['Standard', 'Premium', 'Launch Edition', 'Extended Range'],
    'Zeekr 009 MPV': ['Base', 'Luxury', 'Executive', 'Launch Edition'],
    'Zeekr 001 GT': ['Performance', 'GT Launch Edition'],
    'Zeekr X': ['Base', 'Premium', 'Performance']
    };
    years: { [key: string]: string[] } = {

    };
}