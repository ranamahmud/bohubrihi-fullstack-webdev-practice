class StoryBook:
    pass
# creating an instance/object of the StoryBook class
book_1 = StoryBook()
print(book_1)
print(StoryBook)
# instance variable
book_1.name = 'Hamlet'
book_1.price = 350
book_1.author = 'Shakespeare'
book_1.author_born = 1564
print(book_1.name)


book_2 = StoryBook()
print(book_2)
# ins2ance variable
book_2.name = 'the_kite_runner'
book_2.price = 200
book_2.author = 'Khaled_hosseini'
book_2.author_born = 1965
print(book_2.name)
