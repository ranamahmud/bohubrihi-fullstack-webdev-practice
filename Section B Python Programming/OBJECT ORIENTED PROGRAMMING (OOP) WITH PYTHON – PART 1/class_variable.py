class StoryBook:
    # class variable
    no_of_books = 0

    discount = 0.5
    def __init__(self, name, price, author_name, author_born,no_of_pages):
        self.name = name
        self.price = price
        self.author_name = author_name
        self.author_born = author_born
        self.publishing_year = 2020
        self.no_of_pages = no_of_pages
        StoryBook.no_of_books += 1
    # regular method
    def get_book_info(self):
        print(f'The book name: {self.name}, {self.price}, pages: {self.no_of_pages}')
    def get_author_info(self):
        print(f'The author name: {self.author_name}, born: {self.author_born}')

    def apply_discount(self):
        self.price = self.price  - self.price * StoryBook.discount

book_1 = StoryBook("Hamlet",350,"Shakespeare",1564,500)
book_2 = StoryBook("the_kite_runner",200,"Khaled_hosseini",1965,200)

book_1.get_book_info()
book_1.get_author_info()
print(book_1.name)
print(book_2.name)

print(StoryBook.no_of_books)
print(book_2.price)
book_2.apply_discount()
print(book_2.price)
