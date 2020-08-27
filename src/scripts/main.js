// creates the initial plan --- an array of seed names
import { createPlan } from "./plan.js";
const createdPlan = createPlan();
console.log("createdPlan output: ");
console.log(createdPlan);

// uses the plan to plant the seeds
// planted seeds are automatically put into an array from usePlants()
import { plantSeeds } from "./tractor.js";
plantSeeds(createdPlan);
console.log("plantSeeds output: ");
console.log(plantSeeds);

// contains an array of planted seeds as objects
import { usePlants } from "./field.js";
const usedPlants = usePlants();
console.log("usePlants output: ");
console.log(usedPlants);

// iterates over array of planted seeds & puts in array of harvested seeds
// adds one seed for each output number for that particular plant
import { harvestPlants } from "./harvester.js";
const harvestResult = harvestPlants(usedPlants);

console.log("harvestedPlantsPlan output: ");
console.log(harvestResult);

// prints the catalog to the html file
import { Catalog } from "./catalog.js";
Catalog();
// console.log(catalogOutput);
