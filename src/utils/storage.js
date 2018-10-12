const getStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

const setStorage = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export default {
  getStorage,
  setStorage,
};
