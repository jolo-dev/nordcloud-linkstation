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

Otherwise follow the instructions below:

### Prerequisite

* [Python](https://www.python.org/downloads/) (>= 3.8)
* [NodeJS](https://nodejs.org/en/download/) (>= 14.x)

### Backend

The backend is written in Python and maybe it is best to create a virtualenvironment first.

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

### Frontend

To start the frontend, you should start a new terminal and go from the root of this project

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on http://localhost:3000.

## Deployment

We deploy this application on AWS with [Serverless Stack](https://serverless-stack.com/)
