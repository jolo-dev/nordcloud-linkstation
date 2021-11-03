# Backend

This backend is made with [FastAPI](https://fastapi.tiangolo.com/).

## Getting started

**Run the uvicorn server**

```bash
uvicorn handler:app --reload
```

**Endpoint**

| Name         | Parameters | Description |
|--------------|-----------|------------|
| /api/best-powerstation | `/x/y` | Calculates the best power for a given Point (x,y)|

## OpenAPI

Append in the URL `/docs` for OpenAPI or `/redoc` for an alternative version [ReDoc](https://github.com/Redocly/redoc)