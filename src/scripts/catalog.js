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

export const foodTotals = (harvestResult) => {
  let tallyThatFood = {
    asparagus: 0,
    corn: 0,
    potato: 0,
    soybean: 0,
    sunflower: 0,
    wheat: 0,
  };

  for (const item of harvestedPlants) {
    if (item.type === "Asparagus") {
      tallyThatFood.asparagus++;
    } else if (item.type === "Corn") {
      tallyThatFood.corn++;
    } else if (item.type === "Potato") {
      tallyThatFood.potato++;
    } else if (item.type === "Soybean") {
      tallyThatFood.soybean++;
    } else if (item.type === "Sunflower") {
      tallyThatFood.sunflower++;
    } else if (item.type === "Wheat") {
      tallyThatFood.wheat++;
    } else {
      console.log(
        "something is wrong with food totals array, you should fix that"
      );
    }
  }

  return tallyThatFood;
};
