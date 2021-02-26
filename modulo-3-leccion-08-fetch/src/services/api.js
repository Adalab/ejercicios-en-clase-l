const getDataFromApi = () => {
  return fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

export default getDataFromApi;
