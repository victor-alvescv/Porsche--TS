type Porsche = {
  id: number;
  name: string;
  year: number;
  powerInfo: string;
  acceleration: string;
  topSpeed: string;
  carPhoto: string;
};

let cars: Porsche[] = [
  {
    id: 1,
    name: "718 CAYMAN",
    year: 2020,
    powerInfo: "220 kW/300 cv",
    acceleration: "5,1 s",
    topSpeed: "275 km/h",
    carPhoto: "http://127.0.0.1:5500/assets/porsche.jpg",
  },
  {
    id: 2,
    name: "CAYENNE GTS COUPÉ",
    year: 2023,
    powerInfo: "268 kW/500 cv",
    acceleration: "4,4 s",
    topSpeed: "275 km/h",
    carPhoto: "http://127.0.0.1:5500/assets/porsche2.png",
  },
  {
    id: 3,
    name: "911 CARRERA",
    year: 2025,
    powerInfo: "290 kW/394 cv",
    acceleration: "4,1 s",
    topSpeed: "294 km/h",
    carPhoto: "http://127.0.0.1:5500/assets/porsche3.png",
  },
  {
    id: 4,
    name: "PANAMERA 4 E-HYBRID",
    year: 2020,
    powerInfo: "220 kW/300 PS",
    acceleration: "5,1 s",
    topSpeed: "275 km/h",
    carPhoto: "http://127.0.0.1:5500/assets/porsche2.png",
  },
];
