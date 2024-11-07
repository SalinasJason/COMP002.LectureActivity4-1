let myGrades = [100, 95, 80, 75, 70];
console.log(myGrades[0]); // Outputs: 100
console.log(myGrades[4]); // Outputs: 70

for (let i = 0; i < myGrades.length; i++){
    console.log(myGrades[i]); // Outputs 100 95 80 75 70
}

let myGrades2 = [100, 95, 80, 75, 70];
myGrades2.push(60);
myGrades2.push(50);
myGrades2.push(40);
myGrades2.push(30);
myGrades2.push(20);
console.log(myGrades2); // Outputs: [100, 95, 80, 75, 70, 60, 50, 40, 30, 20]
console.log(myGrades2.pop());
console.log(myGrades2.pop());
console.log(myGrades2.pop());
console.log(myGrades2); // Outputs: [100, 95, 80, 75, 70, 60, 50]

let myString = "Jason Salinas";
console.log(myString.length); // Outputs: 13
