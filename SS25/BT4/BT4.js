let n = +prompt("Nhập n");
let sum = 0;
let multi = 1;
for(let i = 1; i <= n; i++){
    multi *= i;
    sum += multi;
}
console.log(sum);