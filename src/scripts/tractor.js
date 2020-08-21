import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant } from './field.js';



export const plantSeeds = (plantingPlan) => {
    for (const arrayOfPlants of plantingPlan) {
        for (const plant of arrayOfPlants) {

            if (plant === "Asparagus") {
                const seed = createAsparagus()
                addPlant(seed)
            } else if (plant === "Wheat") {
                const seed = createWheat()
                addPlant(seed)
            } else if (plant === "Potato") {
                const seed = createPotato()
                addPlant(seed)
            } else if (plant === "Soybean") {
                const seed = createSoybean()
                addPlant(seed)
            } else if (plant === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed)
            } else {
                const seed = createCorn()
                addPlant(seed[0]),
                addPlant(seed[1])
            }
        }
    }
}

