import { DataStore } from './interfaces';

let data: DataStore = {
  users: [],
  posts: [],
};

const getData = (): DataStore => {
  return data;
};

const setData = (newData: DataStore) => {
  data = newData;
};

const clear = () => {
  data = {
    users: [],
    posts: [],
  };

  return {};
};

export { getData, setData, clear };
