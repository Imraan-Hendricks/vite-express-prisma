import express from 'express';
import { createServer } from 'http';
import { Router } from './routes/router';

const app = express();

app.use(express.json());

app.use(Router);

export const server = createServer(app);
