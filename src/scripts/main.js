console.log("Welcome to the main module")

import { createPlan } from './plan.js';



let yearlyPlan = createPlan();

// console.log(yearlyPlan);


import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)