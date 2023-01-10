import express from 'express';

export const ApiRouter = express.Router();

ApiRouter.get('/test', (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to express' });
});
