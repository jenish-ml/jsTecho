// if Statement

let age = 20;
// Q: Print "Adult" if age is 18 or above
if (age >= 18) {
    console.log("Adult");
}

// if-else Statement

let marks = 40;
// Q: Print "Pass" if marks >= 35, otherwise "Fail"
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// if-else if-else Statement

let score = 85;
// Q: Print grade based on score
// 90+ -> A, 75-89 -> B, 50-74 -> C, <50 -> Fail
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// switch Statement

let day = 4;
// Q: Print the day of the week
// 1 -> Monday, 2 -> Tuesday, 3 -> Wednesday, 4 -> Thursday, 5 -> Friday
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}