class Dancer:
    def __init__(self, style):
        self.style = style

    def dance(self):
        print(f'Dancing in {self.style}')


class Singer:
    def __init__(self, genre):
        self.genre = genre

    def sing(self):
        print(f'Singing in {self.genre} music')


class Artist:
    def __init__(self, painting_material):
        self.painting_material = painting_material

    def paint(self):
        print(f'Painting in {self.painting_material}')


class SuperHuman(Dancer, Singer, Artist):
    def __init__(self, style, genre, painting_material, sport):
        Dancer.__init__(self, style)
        Singer.__init__(self, genre)
        Artist.__init__(self, painting_material)
        self.sport = sport

    def play_sport(self):
        print(f'Singing {self.sport}')

    def dance(self, competition="Fresher's Cup"):
        print(
            f'Dancing with my own {self.style} in the competition {competition}'
        )


s = SuperHuman('Hip-Hop', 'Classical', 'Acrylic', 'Football')
print(s.style)
print(s.genre)
print(s.painting_material)
print(s.sport)
s.dance("Hiphop Bangla")
s.sing()
s.paint()
s.play_sport()