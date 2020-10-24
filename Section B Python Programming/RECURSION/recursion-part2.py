def sum_f(n):
    sum = 0

    for i in range(1, n + 1):
        sum = sum + i
    return sum

print(sum_f(4))

def sum_f2(n):
    if n == 0:
        return 0
    return n + sum_f2(n - 1)

print(sum_f2(4))

# reverse list

lists = [1, 2, 3, 4]
def reverse_list(A):
    new_list = []
    for i in range(0, len(A)):
        new_list.append(0)
    for i in range(len(A) - 1, -1,-1):
        new_list[len(A) - 1 - i] = A[i]
    return new_list
print(reverse_list(lists))


def reverse_list_recursive(some_list):
    if len(some_list) == 0:
        return []
    return [some_list[-1]] + reverse_list_recursive(some_list[:-1])
print(reverse_list_recursive(lists))


# recursive fibonacci

def fibo_recusrive(n):
    if n <= 1:
        return n
    return fibo_recusrive(n - 1) + fibo_recusrive(n - 2)
print(fibo_recusrive(6))