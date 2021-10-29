from src.Models import Point

import math

def calculate_distance(powerstation: Point, device: Point):
    """
    Calculates the distance between two points by using the mathematical distance function

    :params powerstation: Location of the Powerstation
    :params device: Location of the device
    """
    return math.sqrt(math.pow(powerstation.x - device.x, 2) + math.pow(powerstation.y - device.y, 2))