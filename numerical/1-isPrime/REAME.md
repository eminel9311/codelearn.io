Introduce type post genCode.
If you are familiar with writing the main() function, manually entering data from the keyboard and exporting the data to the screen, today we will introduce you to the genCode type.

For example, the problem of summing two integers a and b:

The complete program will look like this:

#include<iostream>

using namespace std;

int sum (int a, int b){
	return a + b;
}

int main(){
	int a, b;
	cin >> a >> b;
	cout << sum(a, b);
	
	return 0;
}
To save your time, we will just ask you to write the processing function, not the main() function, for example, the above article you will see only the sample code is:

int sum (int a, int b){
	
}
Your task is to write a function so that it returns the correct result for the assignment.

Your code when running test /submission will be:

int sum (int a, int b){
	return a + b;
}
If many of you wonder about the need for additional libraries, this is not a problem, we have added most of the basic libraries, so you can use it without a declaration.

Try the exercise below with this type of exercise.

Task.
A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers

Implement a function that determines if a given positive integer is a prime or not.

Example

For n = 47, the output should be isPrime(n) = true;
For n = 4, the output should be isPrime(n) = false.
Input/Output

[execution time limit] 0.5 seconds

[input] integer n

A positive integer.

Guaranteed constraints:
0 ≤ n ≤ 1000.

[output] boolean

true if n is a prime number, false otherwise.