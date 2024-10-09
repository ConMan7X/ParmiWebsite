import HTTPError from 'http-errors';

import { requestClear, requestRegister } from './wrapperRequests';

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
