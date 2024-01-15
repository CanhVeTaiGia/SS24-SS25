function roundToFive(s) {
    return +(Math.round(num + "e+5") + "e-5");
}
let n = +prompt("Nhập số");
let m = 1;
let s = 0;
for(let i = 1; i <= n; i++){
    m = i**3;
    s += m;
}
console.log(roundToFive);