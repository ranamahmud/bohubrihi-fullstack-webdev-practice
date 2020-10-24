import copy as cp
# a = [1,2,3]
# b = a
# print(a==b)

# b[1] = 3.1416
# print(a)

def f(some_list):
    some_list.append('ok')
# x = [1,2,3]
# print(x)
# f(x)
# print(x)


x = [1,2,3]
s = cp.copy(x)
print(s)
f(s)
print(s)
print(x)