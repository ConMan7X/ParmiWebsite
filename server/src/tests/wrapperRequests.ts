import HTTPError from 'http-errors';
import request from 'sync-request-curl';

import { port, url } from '../config.json';
const SERVER_URL = `${url}:${port}`;

const errorChecking = (statusCode: number, responseString: string | Buffer) => {
  const body = JSON.parse(responseString.toString());

  if (statusCode !== 200) {
    throw HTTPError(statusCode, body);
  }
  return body;
};

export const requestClear = () => {
  const res = request('DELETE', SERVER_URL + '/api/clear', { qs: {} });
  return errorChecking(res.statusCode, res.body);
};

export const requestRegister = (
  email: string,
  password: string,
  username: string
) => {
  const res = request('POST', SERVER_URL + '/api/register', {
    json: {
      email,
      password,
      username,
    },
  });
  return errorChecking(res.statusCode, res.body);
};
