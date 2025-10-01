// for Loop Practice

// Q: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while Loop Practice

// Q: Print numbers from 1 to 5 using while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// do-while Loop Practice

// Q: Print numbers from 1 to 5 using do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Nested for Loop Practice

// Q: Print a 3x3 multiplication table pattern
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// Nested while Loop Practice

// Q: Print 3x3 star pattern
let row = 1;
while (row <= 3) {
    let col = 1;
    let stars = "";
    while (col <= 3) {
        stars += "* ";
        col++;
    }
    console.log(stars);
    row++;
}