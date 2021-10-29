import pytest

from src.Models import PowerStation, Point
from src.calculate import calculate_power_for_device

def test_calculate_power():
    foo = calculate_power_for_device(PowerStation(Point(0,0), 10), Point(0,0))
    assert foo == 100

    bar = calculate_power_for_device(PowerStation(Point(100,100), 10), Point(10,0))
    assert bar == 0

    bar = calculate_power_for_device(PowerStation(Point(20,20), 5), Point(18,18))
    assert bar == 4.715728752538098

def test_raise_when_reach_is_negative():
    with pytest.raises(KeyError) as e:
        calculate_power_for_device(PowerStation(Point(0,0), -10), Point(0,0))
    assert e.value.args[0] == "Reach cannot be negative: reach=-10"
