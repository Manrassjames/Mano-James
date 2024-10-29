let A=70;
A++
console.log(A)
var B=100;
B++
console.log(A)
const C=150;
C
console.log(C)
let computer=5;
 computer+
console.log(computer)
let Rass=300;
Rass++
console.log(Rass)
const Silva=250;
Silva+
console.log(Silva)
let number1=1635
let number2=564
let result=number1+number2
console.log(result)
let number20=2024
let syear=2023
let jyear=2025
let result=number20+syear+jyear;
console.log(result)
function palindrome(str) {
    let reversedString=str.toLowerCase().split('').reverse().join('')
    if(str===reversedString){
        console.log(`${str} is a palidrom`)
    }
    else {
        console.log(`${str} is not a palidrom`)
    }
    return reversedString
    }
    console.log(palindrom('dad'));
    console.log(palindrom('MUM'));
    console.log(palindrom('cat'));
    palindrom('DAD')