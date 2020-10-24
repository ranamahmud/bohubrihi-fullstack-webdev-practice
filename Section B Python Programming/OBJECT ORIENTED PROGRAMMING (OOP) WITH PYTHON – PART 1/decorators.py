def outer(message):
    print('In the outer function')

    def inner():
        print('calling the inner function')
        print(message)
    return inner

f = outer("Hello World")
print(f)
f()

def decorator(original_func):
    print('In the decorator function\n')

    def wrapper():
        print(f'wrapper executed before {original_func.__name__}()')

        if 10 > 5:
            pritn('yes it is true')
        return original_func() + 'extra string!'
    return wrapper

