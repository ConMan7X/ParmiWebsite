import HTTPError from 'http-errors';

import { requestClear, requestLogin, requestRegister } from './wrapperRequests';

beforeEach(() => requestClear());

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
      expect(
        requestRegister('conman.schicty@gmail.com', 'password1', 'conman')
      ).toStrictEqual({ message: expect.any(String) });
    });
  });
});

describe('Test for logging in users', () => {
  describe('Error cases', () => {
    test('Testing no users', () => {
      expect(() =>
        requestLogin('conman.schicty@gmail.com', 'password1')
      ).toThrow(HTTPError(400));
    });
    test('Testing wrong email', () => {
      requestRegister('conman.schicty@gmail.com', 'password1', 'conman');
      expect(() => requestLogin('conman@gmail.com', 'password1')).toThrow(
        HTTPError(400)
      );
    });
    test('Testing wrong password', () => {
      requestRegister('conman.schicty@gmail.com', 'password1', 'conman');
      expect(() =>
        requestLogin('conman.schicty@gmail.com', 'password2')
      ).toThrow(HTTPError(400));
    });
  });
  describe('Success', () => {
    test('Testing successful login', () => {
      requestRegister('conman.schicty@gmail.com', 'password1', 'conman');
      expect(
        requestLogin('conman.schicty@gmail.com', 'password1')
      ).toStrictEqual({
        message: 'Login successful',
        id: expect.any(String),
      });
    });
  });
});
