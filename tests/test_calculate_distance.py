from src.calculate import calculate_distance
from src.Models import Point

def test_distance_between_two_points():
    foo = calculate_distance(Point(0,0), Point(0,0))
    assert foo == 0

    bar = calculate_distance(Point(20,20), Point(15,10))
    assert bar == 11.18034

    baz = calculate_distance(Point(10, 0), Point(18, 18))
    assert baz == 19.69772

def test_throw_when_negative_values():
    with pytest.raises(KeyError) as e:
        calculate_distance(Point(-10, -10), Point(0,0))
    assert e.args[0] == "Point should contain a negative value but was -10,-10"
