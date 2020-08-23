const arrayOfSeeds = [];
var i;

export const harvestPlants = (plantsArray) => {
    for (const plant of plantsArray) {
        for (i = 0; i < plant.output; i++) {
            arrayOfSeeds.push(plant)
        }
    }
    
    return arrayOfSeeds
}



// export const harvestPlants = (plantsArray) => {
//     for (const plants of plantsArray) {
//         for (i = 0; i < plants.output; i++) {
//             arrayOfSeeds.push(plants)
//         }
//     }
    
//     return arrayOfSeeds
// }