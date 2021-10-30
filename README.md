# Power calculator for devices

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jolo-dev/nordcloud-linkstation)

This is a calculator which calculates the nearest powerstation for a given point.

## Development

### Prerequisite

* Python (>= 3.8)
* [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html) for deployment

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