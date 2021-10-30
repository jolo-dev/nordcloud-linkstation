import pytest

from src.Models import PowerStation, Point
from src.calculate import calculate_closest_powerstation


@pytest.fixture
def link_stations():
    return [
        PowerStation(Point(0, 0), 10),
        PowerStation(Point(20, 20), 5),
        PowerStation(Point(10, 0), 12),
    ]


@pytest.fixture
def solutions():
    return [
        "Best link station for point 0,0 is 0,0 with power 100.0",
        "No link station within reach for point 100,100",
        "Best link station for point 15,10 is 10,0 with power 0.6718427000252355",
        "Best link station for point 18,18 is 20,20 with power 4.715728752538098",
    ]


def test_calculate_closest_powerstation(link_stations, solutions):

    devices = [Point(0, 0), Point(100, 100), Point(15, 10), Point(18, 18)]

    for idx, dev in enumerate(devices):
        assert calculate_closest_powerstation(link_stations, dev) == solutions[idx]


def test_empty_powerstations():
    device = Point(10, 10)

    with pytest.raises(ValueError) as e:
        calculate_closest_powerstation([], device)
    e.value.args[0] == "List of Powerstation cannot be empty"
