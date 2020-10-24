a = ('hello','pi')
print(a)

tup = (1,2,3,4,5)
print(tup)
print(type(tup))


tup = (1,2,3,4,5,'hello',9.888)
print(tup)
print(type(tup))

print(tup[4])

print(tup[:3])

new_list = list(tup)
print(new_list)
print(type(new_list))

tup_new = tuple(new_list)
print(tup_new)
print(type(tup_new))

# reference
