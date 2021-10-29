from src.Models import Point, PowerStation

import math

def calculate_distance(location1: Point, location2: Point) -> float:
    """
    Calculates the distance between two points by using the mathematical distance function

    :params location1: Location of the first point
    :params location2: Location of the location2
    :return float
    """
    return math.sqrt(math.pow(location1.x - location2.x, 2) + math.pow(location1.y - location2.y, 2))

def calculate_power_for_device(powerstation: PowerStation, device: Point) -> float:
    """
    Calculates the Power of link station and the point of the devices location

    :params powerstation: PowerStation containing its point and its reach
    :params device: Point of the device
    :return float
    """
    distance = calculate_distance(powerstation.location, device)
    power = math.pow((powerstation.reach - distance), 2)
    return 0 if distance > reach else power
