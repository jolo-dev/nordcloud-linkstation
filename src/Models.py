class Point:
    """Point in a 2-dimensional space"""
    def __init__(self, x: int, y: int):
        """
        :params x: x-coordinate in 2d
        :params y: y-coordinate in 2d
        :raise KeyError: x or y cannot be < 0
        """
        if x < 0 or y < 0:
            raise KeyError(f"Point should contain a negative value but was {x},{y}")
        
        self.x = x
        self.y = y

    
class PowerStation:
    """Powerstation which has an additional reach attribute"""
    def __init__(self, location: Point, reach: int):
        """
        :params location: Point of the Powerstation
        :params reach: The distance which the Powerstation send its power
        :raise KeyError: When reach is negative
        """
        if reach < 0:
            raise KeyError(f"Reach cannot be negative: reach={reach}")
        self.location = location
        self.reach = reach