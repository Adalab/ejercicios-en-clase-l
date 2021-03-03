const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getMaxValue = (numberA, numberB) => {
  return Math.max(numberA, numberB);
};

const filterFavoriteSeries = series => {
  return series.filter(serie => serie.isFav === true);
};

const objToExport = {
  getRandomNumber: getRandomNumber,
  getMaxValue: getMaxValue,
  filterFavoriteSeries: filterFavoriteSeries
};

export default objToExport;
