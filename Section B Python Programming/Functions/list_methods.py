places_visited = ['Nepal', 'Malyasia', 'Bhutan','USA']

print(places_visited.index('Bhutan'))

places_visited.append('Africa')
print(places_visited)

places_visited.insert(2,'United Kingdom')
print(places_visited)

# remove
places_visited.remove('Nepal')
print(places_visited)

# sort
places_visited.sort()
print(places_visited)

# sort
places_visited = ['Nepal', 'Malyasia', 'Bhutan','USA','bk']
places_visited.sort(key=str.lower)
print(places_visited)

places_visited.sort(key=str.lower, reverse=True)
print(places_visited)