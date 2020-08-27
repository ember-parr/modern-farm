// function log(msg) {
//     var logElem = document.querySelector(".log");

//     var time = new Date();
//     var timeStr = time.toLocaleTimeString();
//     logElem.innerHTML += timeStr + ": " + msg + "<br/>";
//   }

import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";

const usedPlants = usePlants();
const harvestedPlants = harvestPlants(usedPlants);

// let seedID = 0;

// for (const plant in harvestedPlants) {
//   plant.id = seedID++;
// }

export const Catalog = (harvestResult) => {
  let pageElement = document.querySelector(".container");
  let foods = harvestedPlants;
  foods.sort((a, b) => (a.type > b.type ? 1 : -1));
  let plantID = 0;

  let thingToGoOnPage = "";
  for (const food of foods) {
    plantID++;
    thingToGoOnPage += `
            <section class="plant"> ${food.icon} 
            <p>id: ${plantID}</section>
        `;
  }

  pageElement.innerHTML += `
    ${thingToGoOnPage}
    `;
};
