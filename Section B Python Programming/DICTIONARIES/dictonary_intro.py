my_stuff = {'book': 'CookBook', 'phone': 'iphone', 'Home': 'Bangladesh'}
print(my_stuff)

print(my_stuff['book'])

x = {0: 100, 1: 200, 2: 300, 3: 400}
print(x)

a = [1, 2, 3]

b = [2, 3, 1]

print(a == b)

c = {1: 100, 2: 200}
d = {2: 200, 1: 100}
print(c == d)


D = {'a': 100, 'b': 200}
E = {'c': 300, 'd': 400}

new_dic = D.copy()
new_dic.update(E)
print(new_dic)
