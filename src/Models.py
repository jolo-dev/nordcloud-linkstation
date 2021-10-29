class Point:

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    
class PowerStation:

    def __init__(self, location: Point, reach: int):
        self.location = location
        self.reach = reach