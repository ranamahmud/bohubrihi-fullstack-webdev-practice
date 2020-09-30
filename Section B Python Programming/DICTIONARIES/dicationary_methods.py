identity = {'Name': 'Ajwad', 'Age': '21', 'Job': 'Student'}
print(identity.values())

for i in identity.keys():
    print(i)

for i in identity.values():
    print(i)

for i in identity.items():
    print(i)

x = list(identity.keys())
y = list(identity.values())
print(x, y)

for k, v in identity.items():
    print('Key', k)
    print('Value', v)
print('Name' in identity)
print('pop' in identity)

print('Akil' in identity.values())
print('Age' in identity.keys())
# get() method
print(identity.get('Name', "DEFAULT"))
print(identity.get('Height', "DEFAULT"))

# setdefault() method
print(identity.setdefault('Name', 'Cosmos'))
print(identity.setdefault('Height', '6ft'))
