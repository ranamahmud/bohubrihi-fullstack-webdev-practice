fav_movie = []

while True:
    print("Movie no ",str(len(fav_movie)+1)+ " or press Enter to Stop adding to the list")
    movie = input()
    if movie == '':
        break
    fav_movie = fav_movie + [movie]
if len(fav_movie) != 0:
    print('This list of movies are')
    for i in range(0,len(fav_movie)):
        print(fav_movie[i])

