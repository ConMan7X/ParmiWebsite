import HTTPError from 'http-errors';
import sha256 from 'sha256';

import { getData, setData } from './dataStore';
import { DataStore, User } from './Interfaces';
import { generateID } from './helperFunctions';

/**
 * Register a new user with the provided details
 * @param email: string
 * @param password: string
 * @param username: string
 * @returns HTTPError or success message
 */
export function register(email: string, password: string, username: string) {
	const data: DataStore = getData();

	const id: string = generateID();

	const hashedPassword: string = sha256(password);

	const result = data.users.filter(
		(user) => user.email === email && user.password === hashedPassword
	);

	if (result.length !== 0) {
		throw HTTPError(400, "User already exists!");
	}

	const newUser: User = { id, email, password: hashedPassword, username };
	data.users.push(newUser);
	setData(data);
	return {
		message: "Account created successfully!",
	};
}

/**
 * Login the user
 * @param email: string
 * @param password: password
 */
export function login(email: string, password: string) {

}