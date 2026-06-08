import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' });
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to OctoFit Tracker API' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker Backend running on port ${PORT}`);
  console.log(`MongoDB connection: ${MONGODB_URI}`);
});
