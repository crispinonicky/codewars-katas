// Numerical palindrome #1

def palindrome(num):

    if isinstance(num, str):
        return "Not valid"
    elif (num < 0):    
        return "Not valid"
    
    rev = int(str(num)[::-1])
    
    if (rev == num):
        return True
        
    return False