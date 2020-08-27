const arrayOfSeeds = [];
var i;

export const harvestPlants = (plantsArray) => {
  for (const plants of plantsArray) {
    if (plants.type === "Corn") {
      for (i = 0; i < 3; i++) {
        arrayOfSeeds.push(plants);
      }
    } else {
      for (i = 0; i < plants.output; i++) {
        arrayOfSeeds.push(plants);
      }
    }
  }

  return arrayOfSeeds;
};
