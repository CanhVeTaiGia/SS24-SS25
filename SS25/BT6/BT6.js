let n = +prompt("Nhập n");
let fNum = 0;
let sNum = 1;
let fibo = 0;
for(let i = 1; i <= n; i++){
    fibo =  fNum + sNum;
    fNum = sNum;
    sNum =  fibo;
}
console.log(`Số Fibonacci thứ n là ${fibo}`);