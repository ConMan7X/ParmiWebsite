import request from 'sync-request-curl';
import HTTPError from 'http-errors';

import { port, url } from '../config.json';
const SERVER_URL = `${url}:${port}`;

import { clear } from '../dataStore';

const ERROR = { error: expect.any(String) };

const errorChecking = (statusCode: number, responseString: string | Buffer) => {
  const body = JSON.parse(responseString.toString());

  if (statusCode !== 200) {
    throw HTTPError(statusCode, body);
  }
  return body;
};

const requestRegister = (email: string, password: string, username: string) => {
  const res = request('POST', SERVER_URL + '/api/register', {
    json: {
      email,
      password,
      username,
    },
  });
  return errorChecking(res.statusCode, res.body);
};

beforeEach(() => clear());

describe('Test for registering new user', () => {
  describe('Error cases', () => {
    test('Testing duplicate user', () => {
      requestRegister('conman.schicty@gmail.com', 'password1', 'conman');
      expect(() =>
        requestRegister('conman.schicty@gmail.com', 'password1', 'conman')
      ).toThrow(HTTPError(400));
    });
  });
  describe('Success', () => {
    test('Testing register new user', () => {
      expect(() =>
        requestRegister('conman.schicty', 'password1', 'conman')
      ).toStrictEqual({ message: 'Account created successfully!' });
    });
  });
});
