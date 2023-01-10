import express from 'express';
import { ApiRouter } from './api/api';

export const Router = express.Router();

Router.use('/api', ApiRouter);
