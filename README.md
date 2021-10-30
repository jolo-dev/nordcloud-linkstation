# Power calculator for devices

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jolo-dev/nordcloud-linkstation)


This is a calculator which calculates the nearest powerstation for a given point.

## Development

### Prerequisite

* [Python](https://www.python.org/downloads/) (>= 3.8)
* [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html) for deployment
* [NodeJS](https://nodejs.org/en/download/) (>= 14.x)
* [Docker](https://www.docker.com/)

### Libraries

* [FastAPI](https://fastapi.tiangolo.com/) for a nice Swagger Documentation
* [NextJS](https://nextjs.org/) for the Frontend

## Deployment

This can be deployed on AWS via AWS SAM.

```bash
sam deploy
```

### Test

```bash
pytest -v
```

Test Coverage

```bash
pytest --cov=./ tests/
```