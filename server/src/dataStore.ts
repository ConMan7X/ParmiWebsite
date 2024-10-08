import { DataStore } from "./Interfaces";

let data: DataStore = {
	users: []
};

const getData = (): DataStore => {
	return data;
}

const setData = (newData: DataStore) => {
	data = newData;
}

export {getData, setData};
