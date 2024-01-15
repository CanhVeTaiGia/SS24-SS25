let num = +prompt("Nhập 1 số nguyên dương bất kì");
let sum = 0;
for(let i = 1; i <= num; i++){
    console.log(i);
    sum+=i;
    if(sum % 2 !== 0){
        console.log(`Tổng các số từ 1 đến ${num} nếu lẻ là: ${sum}`);
    }
}