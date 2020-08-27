export const field = [];

// no return because it doesn't need it? das what Rick said. research this.
export const addPlant = (seed) => {
  field.push(seed);
};

export const usePlants = () => {
  return field;
};
