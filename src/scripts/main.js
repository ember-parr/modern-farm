import { createPlan } from './plan.js';
const yearlyPlan = createPlan();
// console.log(yearlyPlan);


import { usePlants, addPlant } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createPotato } from './seeds/potato.js';
import { plantSeeds } from './tractor.js';


plantSeeds(yearlyPlan);








//this creates the seeds
const asparagus = createAsparagus();
const potato = createPotato();


//this plants the seeds
addPlant(asparagus);
addPlant(potato);

//this uses those planted seeds and shows the whole field, i think? 
const fieldPlanted = usePlants();

// console.log(fieldPlanted);
console.log(fieldPlanted);


