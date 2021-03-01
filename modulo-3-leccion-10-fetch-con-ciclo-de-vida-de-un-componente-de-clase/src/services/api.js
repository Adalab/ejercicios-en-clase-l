const imagePlaceholderSrc = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

const getDataFromApi = searchText => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(response => response.json())
    .then(series => {
      // limpio los datos que me vienen del api antes de meterlos en React
      const result = [];
      // esto también podría hacerlo con un map
      for (const serie of series) {
        result.push({
          id: serie.show.id,
          name: serie.show.name,
          imageSrc: serie.show.image ? serie.show.image.medium : imagePlaceholderSrc
        });
      }
      return result;
    });
};

export default {
  getDataFromApi: getDataFromApi
};
