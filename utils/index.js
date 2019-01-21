/* eslint no-param-reassign: 0 */

const utils = {};

utils.getNumfrom65to90 = () => Math.floor(Math.random() * (89 - 65 + 1) + 65);

utils.checkUniqueID = (array, id) => array.reduce((bool, value) => {
  if (value.id === id) {
    bool = false;
  }
  return bool;
}, true);

utils.createID = (array) => {
  const { getNumfrom65to90, checkUniqueID, createID } = utils;
  let newID = '';
  for (let i = 0; i < 5; i += 1) {
    const randomBinary = Math.round(Math.random());
    if (randomBinary === 1) {
      const randomLetter = String.fromCharCode(getNumfrom65to90());
      newID = `${newID}${randomLetter}`;
    } else {
      const randomNum = Math.round(Math.random() * 10);
      newID = `${newID}${randomNum}`;
    }
  }
  return checkUniqueID(array, newID) ? newID : createID(array);
};

utils.filterArray = (array, id) => array.filter(plant => plant.id !== id);

utils.checkForNewSlug = (slugsArray, plantsOnScreenArray) => {
  const isNewObject = plantsOnScreenArray.reduce(
    (acc, value) => {
      if (!slugsArray.includes(value)) {
        acc.bool = true;
        acc.slugName = value;
      }
      return acc;
    },
    { bool: false, slugName: null }
  );
  return isNewObject;
};

module.exports = utils;
