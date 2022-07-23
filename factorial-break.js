let n = 1;
let i = 1;
let factorial = 10;
while (i <= factorial) {
  n = n * i;
  i++;
  if (i === 5) {
    break;
  }
}
console.log(n);
