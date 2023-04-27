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
13. 
    * A.) '32', because the integer 2 maps to its string representation.
    * B.) 1, because the 2 is deducted from the integer representation of the string '3'.
    * C.) Because null is an empty representation, 3 is output as an integer.
    * D.) '3null', because null is mapped to its string representation.
    * E.) 4, because true maps to an integer value of 1.
    * F.) 0, because false maps to an integer value of 0, and null (empty) is added to it.
    * G.) '3undefined', because undefined is mapped to its string representation.
    * H.) NaN, because an undefined value is unable to be deducted from an integer (as '3' is mapped to its integer representation).
14. 
    * A.) true, because '2' is mapped to its integer representation.
    * B.) false, because '12' is alphabetically prior to '2'.
    * C.) true, because the values are equal despite having differing types.
    * D.) false, because the types of each value do not match.
    * E.) false, because true maps to 1 and is therefore not equal to 2.
    * F.) true, because Boolean of any non-zero value is true.
15. === compares values AND their types, while == only compares values.
16. (part2-question16.js)
17. [2,4,6], because we use the doSomething function as our parameter for callback. Therefore, when looping through the array, we act upon every element with the doSomething function (multiplying it by 2) and appending it to the new array that will be returned.
18. (part2-question18.js)
19. 1 4 3 2, because the execution of lines 3 and 4 are delayed by the setTimeout function, specifically with line 3 receiving the greatest delay and therefore printing last.