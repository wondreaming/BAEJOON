let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let gradeMap = new Map([
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
]);

let points = 0;
let sum = 0;
for (let i = 0; i < input.length; i++) {
  let [subject, point, grade] = input[i].split(" ");
  if (grade !== "P") {
    sum += Number(point) * gradeMap.get(grade);
    points += Number(point);
  }
}

let result = Number(sum) / points;
console.log(result.toFixed(6));
