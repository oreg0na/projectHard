const num = 266219
const numA = num.toString().split('');
let sumA = numA;
for (let i = 1; i < numA.length; ++i) {
  sumA *= numA[i];
}
console.log(sumA);
let degree = sumA ** 3;
let degreeCut = degree.toString().substring(0, 2);
console.log(degreeCut);
