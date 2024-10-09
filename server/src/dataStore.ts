import { DataStore } from './interfaces';

let data: DataStore = {
  users: [],
  threads: [],
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
    threads: [],
  };

  return {};
};

export { getData, setData, clear };
