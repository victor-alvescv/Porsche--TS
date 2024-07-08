const contentWrapper =
  document.querySelector<HTMLDivElement>(".content--wrapper");

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
    carPhoto: "assets/porsche.jpg",
  },
  {
    id: 2,
    name: "CAYENNE GTS COUPÉ",
    year: 2023,
    powerInfo: "268 kW/500 cv",
    acceleration: "4,4 s",
    topSpeed: "275 km/h",
    carPhoto: "assets/porsche2.jpg",
  },
  {
    id: 3,
    name: "911 CARRERA",
    year: 2025,
    powerInfo: "290 kW/394 cv",
    acceleration: "4,1 s",
    topSpeed: "294 km/h",
    carPhoto: "assets/porsche3.jpg",
  },
  {
    id: 4,
    name: "PANAMERA 4 E-HYBRID",
    year: 2024,
    powerInfo: "346 kW/470 cv",
    acceleration: "4,1 s",
    topSpeed: "280 km/h",
    carPhoto: "./assets/porsche4.jpg",
  },
];
let carNumber: number = Math.floor(Math.random() * 4);

function displayCar(car: Porsche): void {
  if (contentWrapper) {
    contentWrapper.innerHTML = `
                  <div class="img--wrapper">
                    <img data-aos="fade-in"
                      data-aos-delay="50"
                      data-aos-duration="500" src=${car.carPhoto} alt="" />
                    <div class="border"></div>
                    <div class="purchase--btn">Purchase</div>
                    <div class="picture--overlay"></div>
                  </div>
                  <div class="porsche">
                    <p
                      data-aos="fade-down"
                      data-aos-delay="400"
                      data-aos-duration="1000"
                      class="content--title"
                    >
                    ${car.name}
                    </p>
                    <p
                      data-aos="fade-in"
                      data-aos-delay="600"
                      data-aos-duration="500"
                      class="content--year"
                    >
                    ${car.year}
                    </p>
                    <div
                      data-aos="fade-in"
                      data-aos-delay="800"
                      data-aos-duration="500"
                      class="division__line"
                    >
                      <div class="line"></div>
                      <img src="assets/logo--small.png" alt="" />
                      <div class="line"></div>
                    </div>
                    <div
                      data-aos="fade-in"
                      data-aos-delay="1000"
                      data-aos-duration="500"
                      class="content--specs"
                    >
                      <div class="specs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgba(0, 0, 0, 0.692)"
                          viewBox="0 0 24 24"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                        <p class="specs--title">${car.powerInfo}</p>
                        <p class="specs--sub-title">Power (kW)/Power (cv)</p>
                      </div>
                      <div class="specs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgba(0, 0, 0, 0.692)"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="white"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                          />
                        </svg>
              
                        <p class="specs--title">${car.acceleration}</p>
                        <p class="specs--sub-title">Acceleration 0 - 100 km/h</p>
                      </div>
                      <div class="specs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgba(0, 0, 0, 0.692)"
                          stroke-width="1.5"
                          stroke="rgba(0, 0, 0, 0.692)"
                          viewBox="0 0 24 24"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                          />
                        </svg>
                        <p class="specs--title">${car.topSpeed}</p>
                        <p class="specs--sub-title">Top Speed</p>
                      </div>
                      <div
                        data-aos="fade-in"
                        data-aos-delay="800"
                        data-aos-duration="500"
                        class="division__line"
                      >
                        <div class="line"></div>
                        <img src="assets/logo--small.png" alt="" />
                        <div class="line"></div>
                      </div>
                    </div>
                  </div>
                </div>`;
  }
}

console.log(carNumber);

function previousCar(): void {
  if (carNumber === 0) {
    carNumber = 3;
    displayCar(cars[carNumber]);
    return;
  }

  carNumber -= 1;
  console.log(carNumber, "minus");
  displayCar(cars[carNumber]);
}

function nextCar(): void {
  if (carNumber === 3) {
    carNumber = 0;
    displayCar(cars[carNumber]);
    return;
  }
  carNumber += 1;
  console.log(carNumber, "plus");
  displayCar(cars[carNumber]);
}

displayCar(cars[carNumber]);
