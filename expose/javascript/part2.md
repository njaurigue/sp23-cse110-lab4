1. '3' is printed, because we loop through 3 items in the list and print out the value of i AFTER the loop.
2. '150' is printed, because discountedPrice holds the reduced price of the last list item once the list completes, which in this case is 300*0.5 = 150.
3. '150' is printed, because discountedPrice holds the reduced price of the last list item once the list completes, which in this case is 300*0.5 = 150. This value is then rounded via Line 8 to a final value of 150.
4. [50, 100, 150] is returned, as each list item was multiplied by 0.5 and returned in a new list.
5. This code causes an error, because the i variable is being printed outside of the scope it was declared in.
6. This code causes an error, because the discountedPrice variable is being printed outside of the loop (scope) it was declared in.
7. '150' is printed, because we are accessing a variable (finalPrice) that was declared in the same scope, and therefore accessible.
8. [50, 100, 150] is returned, as each list item was multiplied by 0.5 and returned in a new list. This variable is accessible because it was declared in the same scope that it was returned.
9. This code causes an error, because the i variable is being printed outside of the scope it was declared in.
10. '3' is printed, because we are accessing the length of the input array, which in this case is of length 3. Also, this variable is accessed in the same scope it is defined in.
11. [50, 100, 150] is returned, as each list item was multiplied by 0.5 and returned in a new list. 
12. 
    * A.) student['name']
    * B.) student['Grad Year']
    * C.) student['greeting']\()
    * D.) student['Favorite Teacher']['name']
    * E.) student['courseLoad'][0]


