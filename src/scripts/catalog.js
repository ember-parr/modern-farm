// function log(msg) {
//     var logElem = document.querySelector(".log");
   
//     var time = new Date();
//     var timeStr = time.toLocaleTimeString();
//     logElem.innerHTML += timeStr + ": " + msg + "<br/>";
//   }

  import { usePlants } from './field.js';
  import { harvestPlants } from './harvester.js';

  const usedPlants = usePlants();
  const harvestedPlants = harvestPlants(usedPlants);



  export const Catalog = (harvestResult) => {
    let pageElement = document.querySelector(".container");
    let foods = harvestedPlants;

    let thingToGoOnPage = "";
    for (const food of foods) {
        thingToGoOnPage += `
            <section class="plant"> ${food.type} </section>
        `
    }

    pageElement.innerHTML += `
    ${thingToGoOnPage}
    `


  }