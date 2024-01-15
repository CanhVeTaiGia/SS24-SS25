let n = +prompt("Nhập số nguyên dương n");
let sum = 0;
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        sum += i;
    }
}
console.log(`Tổng các số chẵn có trong n là: ${sum}`);