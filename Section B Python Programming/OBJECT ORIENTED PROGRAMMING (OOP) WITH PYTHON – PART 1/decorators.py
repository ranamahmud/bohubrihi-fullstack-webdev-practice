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
            print('yes it is true')
        return original_func() 
    return wrapper
# using decorator in one way
@decorator
def print_something():
    print('print_something is being called')

# decorated_f = decorator(print_something)

# decorated_f()

print_something()

# non keyword arguments => f(1,2,3)
# keyword arguments f(a=1,b=2,c=3)



def decorator_2(original_func):
    print('In the decorator 2 function\n')

    def wrapper(*args, **kwargs):
        print(f'wrapper executed before {original_func.__name__}()')

        if 10 > 5:
            print('yes it is true')
        return original_func(*args, **kwargs) 
    return wrapper

@decorator_2
def print_something_more(arg1, arg2):
    print(f'printing argument_1 = {arg1}, argument_2 = {arg2}')

print_something_more(5,6)