import express, { json, Request, Response } from 'express';
import errorHandler from 'middleware-http-errors';
import cors from 'cors';
import { register, login } from './auth';
import { createThread } from './thread';

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world',
  });
});

// Post request for registering users
app.post('/api/register', async (req: Request, res: Response) => {
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

app.post('/api/create/thread', (req: Request, res: Response) => {
  const { thread, userId } = req.body;

  const response = createThread(thread, userId);
  res.json(response);
});

app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
