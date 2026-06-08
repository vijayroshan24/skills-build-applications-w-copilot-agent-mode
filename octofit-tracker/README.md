# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Vite, Node.js, Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite frontend (Port 5173)
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── index.html
└── backend/           # Node.js + Express + TypeScript backend (Port 8000)
    ├── src/
    │   └── index.ts
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## Technology Stack

- **Frontend**: React 19, Vite, TypeScript, Axios
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (Port 27017)
- **API Communication**: REST with proxy configuration

## Ports

- Frontend: `5173`
- Backend: `8000`
- MongoDB: `27017`

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB running locally

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

Backend will be running on `http://localhost:8000`

### MongoDB Setup

Ensure MongoDB is running on `mongodb://localhost:27017`

## API Endpoints

- `GET /health` - Health check
- `GET /` - Welcome message

## Development

Both frontend and backend are configured for development with hot reload capabilities.

- Frontend: Vite HMR for instant updates
- Backend: Express with TypeScript support via ts-node

## Building for Production

### Frontend
```bash
npm run build
```

### Backend
```bash
npm run build
npm start
```
