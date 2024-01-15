let num = +prompt("Nhập num");
let flag = true;
if(num <= 1){
    flag = false;
}
if(num === 2 ){
    flag = true;
}
if(num % 2 === 0){
    flag = false;
}
for(let i = 3; i <= Math.sqrt(num); i+=2){
    if(num % i === 0){
        flag = false;
    }
}
if(flag = true){
    console.log(`${num} không phải là số nguyên tố`);
}else{
    console.log(`${num} là số nguyên tố`);
}