let height = +prompt("Nhập chiều cao");
let width = +prompt("Nhập chiều rộng");
function greatestCommonDivisor(a, b){
    while(b !==0 ){
        let temp = b;
        b= a % b;
        a =temp;
    }
    return a;
}
let square = greatestCommonDivisor;
console.log(`Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là ${square}`);