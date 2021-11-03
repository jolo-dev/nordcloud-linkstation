FROM bitnami/python:3.9

WORKDIR /home/

COPY handler.py requirements.txt ./
COPY src ./src

RUN pip install -r requirements.txt

CMD ["uvicorn", "handler:app", "--reload"]

EXPOSE 8000