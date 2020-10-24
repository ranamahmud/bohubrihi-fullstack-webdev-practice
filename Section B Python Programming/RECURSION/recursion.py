def factorial(n):
    temp = 1
    for i in range(2, n + 1):
        temp = temp * i
    return temp

def factorial2(n):
    if n == 1:
        return 1
    return n * factorial2(n - 1)

num = input()
print(factorial(int(num)))

print(factorial2(int(num)))