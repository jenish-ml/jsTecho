function factorial(n) {
    if ( n <= 1 ) {
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Outputs: 120

// 5 * 24 = 120
// 4 * 6
// 3 * 2
// 2 * 1
// 1

// Recursion is a technique where a function calls itself to solve a problem. It is useful when a problem can be broken down into smaller sub-problems. 

// When a function calls itself, it is known as a recursive function.