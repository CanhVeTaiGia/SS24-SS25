let a = +prompt("Nhập số nguyên dương a");
let b = +prompt("Nhập số nguyên dương b");
let sumOdd = 0;
let sumEven = 0;
if(a>b){
    for(let i = b; i <= a; i++){
        if(i % 2 === 0){
            sumEven += i;
        }else{
            sumOdd += i;
        }
    }
}
if(b>a){
    for(let i = a; i <= b; i++){
        if(i % 2 === 0){
            sumEven += i;
        }else{
            sumOdd += i;
        }
    }
}
console.log(`Tổng các số chẵn ở giữa a với b là: ${sumEven}`);
console.log(`Tổng các số lẻ ở giữa a với b là: ${sumOdd}`);