let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let sum = 0;
if(a > b){
    for(let i = b; i < a; i++){
        sum += i;
    }
}
else{
    for(let i = a; i < b; i++){
        sum += i;
    }
}
console.log(sum);