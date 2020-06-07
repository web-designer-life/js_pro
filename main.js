let num = 266219;
let mul = 1;
let pow;

for (let i = 0; i < num.toString().length; i++) {
    mul = mul * num.toString()[i];
}
 
console.log(mul);
pow = mul ** 3;
console.log(pow.toString().substr(0, 2));