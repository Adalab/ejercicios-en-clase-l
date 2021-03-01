const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = key => {
  const localStorageData = localStorage.getItem(key);
  return JSON.parse(localStorageData);
};

export default {
  get: get,
  set: set
};
