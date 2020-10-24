# while True:
#     print("Please enter your Name")
#     name = input()
#     if name =='rana':
#         break
# print("Thank you")

# while True:
#     print("Who are you?")
#     name = input()
#     if name != "Batman":
#         continue
#     print("Hello there"+name+"What is the passcode?")
#     password = input()
#     if password == "icecreamtruck":
#         break
# print("Enter batman")

# math series
# series = 1^2 + 2^2 + 3^2

# sum = 0
# for i in range(1,5):
#     sum = sum + i*i
# print(sum)

odd_sum = 0
for i in range(1,10,2):
    odd_sum = odd_sum +i
print(odd_sum)


even_sum = 0
for i in range(2,10,2):
    even_sum = even_sum +i
print(even_sum)

# nested for loop
# complex series 
# 1 + (1 + 2) + (1+2+3)+(1+2+3+4)....
sum = 0
for i in range(1,5):
    for j in range(1,i+1):
        sum = sum + j
print(sum)