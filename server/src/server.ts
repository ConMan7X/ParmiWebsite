import express, { json, Request, Response } from 'express';
import errorHandler from 'middleware-http-errors';
import cors from 'cors';
import morgan from 'morgan';

import config from './config.json';

import { register, login } from './auth';
import { createThread } from './post';
import { clear } from './dataStore';

const app = express();

app.use(cors());

app.use(json());

app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || '127.0.0.1';

// Root URL
app.get('/', (req: Request, res: Response) => {
  console.log('Print to terminal: someone accessed our root url!');
  res.json({ message: `Welcome to Sydney Parmi Blog server's root URL!` });
});

app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world',
  });
});

app.delete('/api/clear', (req: Request, res: Response) => {
  const response = clear();

  res.json(response);
});

// Post request for registering users
app.post('/api/register', (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const response = register(email, password, username);
  res.json(response);
});

// Post request for logging in users
app.post('/api/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = login(email, password);
  res.json(response);
});

app.post('/api/create/post', (req: Request, res: Response) => {
  const { post, userId } = req.body;

  const response = createThread(post, userId);
  res.json(response);
});

// For handling errors
app.use(errorHandler());

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});
