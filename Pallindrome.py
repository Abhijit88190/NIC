my_str = int(input("Enter number:"))
reverse = int(str(my_str)[::-1])
if my_str == reverse:
    print('Palindrome')
else:
    print("Not Palindrome")    