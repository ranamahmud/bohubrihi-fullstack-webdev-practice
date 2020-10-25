class Robot:
    def __init__(self, name, version):
        self.name = name
        self.version = version
    def move_forward(self):
        print(f'{self.name} is moving forward')
    def move_backward(self):
        print(f'{self.name} is moving backward')
    def move_right(self):
        print(f'{self.name} is moving right')
    def move_left(self):
        print(f'{self.name} is moving left')

class HouseBot(Robot):
    def __init__(self, name, version, area_covered):
        super().__init__(name, version)
        self.area_covered = area_covered
    def clean(self):
        if self.area_covered > 0:
            print(f'{self.name} is cleaning the house!')
            self.area_covered -= 30
            if self.area_covered < 0:
                self.area_covered = 0
        else:
            print("Can't clean, Please reset the area parameter'")
    def set_cover_area(self, area):
        if self.area_covered == 0:
            self.area_covered = area
        else:
            print("I can still clean more area")
    @staticmethod
    def halt():
        print("I am halting")
    def move_forward(self):
        print("This is in House Bot class")
        super().move_forward()
houseBot = HouseBot('Bob',1,26)
print(houseBot.name)
houseBot.move_forward()
houseBot.move_backward()
houseBot.move_right()
houseBot.move_left()
houseBot.clean()
houseBot.clean()
houseBot.clean()
print(houseBot.area_covered)
houseBot.set_cover_area(50)
houseBot.clean()
