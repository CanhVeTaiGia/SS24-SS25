let n = +prompt("Nhập số");
let s = 0;
let m = 1;
for(let i = 1; s < n; i++){
    if(i % 2 === 0){
        m = i ** 2;
        s += m;
        console.log(m);
    }
}