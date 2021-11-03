# Power calculator for devices

This is a calculator which calculates the nearest powerstation for a given point.

## Tech Stack

I went for a full stack application made of

* [NextJS](https://nextjs.org/) for the Frontend
* [FastAPI](https://fastapi.tiangolo.com/) for the Backend because it has a nice OpenAPI Documentation
* [Serverless Stack](https://serverless-stack.com/) for deploying infrastructure on AWS

## Getting Started

If you don't wanna pollute your local environment, click below

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jolo-dev/nordcloud-linkstation)

> **Note:** it might happen that your browser prevents to open a new tab, please allow it for Gitpod.

Otherwise follow the instructions below:

### Prerequisite

* [Python](https://www.python.org/downloads/) (>= 3.8)
* [NodeJS](https://nodejs.org/en/download/) (>= 14.x)
* [PNPM](https://pnpm.io/)

### Backend

The backend is written in Python and it is recommended to create a virtualenvironment first.

```bash
cd backend/
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

And now start the backend server

```bash
uvicorn handler:app --reload
```

The application should be available on http://localhost:8000.

**Test**

```bash
pytest -v
```

**Test Coverage**

```bash
pytest --cov=./ tests/
```

### Monorepo

For this repo, we use a monorepo approach for the Frontend and Infrastructure because both are using Typescript.
PNPM is a more efficient package manager than NPM or Yarn + supports Monorepo out-of-the-box.
Please, [install it before](https://pnpm.io/installation).

In root folder of this project

```bash
npm install -g pnpm
pnpm install
```

### Frontend

To start the frontend, you should start a new terminal and go from the root of this project

```bash
cd frontend
pnpm install
pnpm run dev
```

The frontend will run on http://localhost:3000.

## Deployment

We deploy this application on AWS with [Serverless Stack](https://serverless-stack.com/)

```bash
cd infrastructure
pnpm install
pnpm deploy
```
