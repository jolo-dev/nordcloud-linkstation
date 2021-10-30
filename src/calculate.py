from typing import List
import math

from src.Models import Point, PowerStation


def calculate_distance(location1: Point, location2: Point) -> float:
    """
    Calculates the distance between two points by using the mathematical distance function

    :params location1: Location of the first point
    :params location2: Location of the location2
    :return float
    """
    return math.sqrt(
        math.pow(location1.x - location2.x, 2) + math.pow(location1.y - location2.y, 2)
    )


def calculate_power_for_device(powerstation: PowerStation, device: Point) -> float:
    """
    Calculates the Power of link station and the point of the devices location

    :params powerstation: PowerStation containing its point and its reach
    :params device: Point of the device
    :return float
    """
    distance = calculate_distance(powerstation.location, device)
    power = math.pow((powerstation.reach - distance), 2)
    return 0 if distance > powerstation.reach else power


def calculate_closest_powerstation(
    powerstations: List[PowerStation], device: Point
) -> str:
    """
    Calculates the maximum power for a given device

    :params device: Point of the device
    :return str
    :raise ValueError: List of Powerstation cannot be empty
    """

    if len(powerstations) == 0:
        raise ValueError("List of Powerstation cannot be empty")

    best_power = max(
        [
            {
                "location": power.location,
                "power": calculate_power_for_device(power, device),
            }
            for power in powerstations
        ],
        key=lambda x: x["power"],
    )

    return (
        f"Best link station for point {device.x},{device.y} is {best_power['location'].x},{best_power['location'].y} with power {best_power['power']}"
        if best_power["power"] > 0
        else f"No link station within reach for point {device.x},{device.y}"
    )
