const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log(A + B + C);