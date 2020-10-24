class StoryBook:
    # a special method is used for setting the instance variable
    def __init__(self, name, price, author_name, author_born):
        self.name = name
        self.price = price
        self.author_name = author_name
        self.author_born = author_born
        self.publishing_year = 2020

book_1 = StoryBook("Hamlet",350,"Shakespeare",1564)
book_2 = StoryBook("the_kite_runner",200,"Khaled_hosseini",1965)

# book_1.name = "Hamlet"
# book_1.price = 350
# book_1.author_name = "Shakespeare"
# book_1.author_born = 1564

# book_2.name = "the kite runner"
# book_2.price = 200
# book_2.author_name = "Khaled Hosseni"
# book_2.author_born = 1965
print(book_1.name)
print(book_2.name)