a = [1, 2, 3]
print(a)
b = ['a','b','c']
print(b)

z = [3.1415,'pi',23]
print(z)

print(a[0])

# nested list

x = [[1,2,3],[4,5,6]]
print(x)
print(x[0][1])


# negative indexes
p = [1,2,3,4,5,6]
print(p[-1])
print(p[-2])

# list slicing
q = [1,2,3,4,5,6]
print(q[0:5])
print(q[1:3])
print(q[0:-2])
print(q[1:-1])
print(q[:4])
print(q[4:])
print(q)

a = [1,2,3,4]
b = ['x','y','z']
ab = a + b
print(ab)

x = ['p','q','r']
new_x = x * 2
print(new_x)

p = ['a',0, 9]
del p[0]
print(p)