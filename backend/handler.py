from fastapi import FastAPI

from src.calculate import calculate_closest_powerstation
from src.Models import Point, PowerStation

app = FastAPI()


@app.get("/best-powerstation/{x}/{y}")
def handler(x: int, y: int):
    powerstations = [
        PowerStation(Point(0, 0), 10),
        PowerStation(Point(20, 20), 5),
        PowerStation(Point(10, 0), 12),
    ]
    return calculate_closest_powerstation(powerstations, Point(x, y))
