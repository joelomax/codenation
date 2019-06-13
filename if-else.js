if (1== "1") {
    console.log(true);
}
else {
    console.log(false); 
}
let country = "UK"
let age = 15
if (age>17 && country =="UK") {
    console.log("yes I can serve you")
}
else {
    console.log("get out of my pub!")
}
let day = 'saturday'


let password = "passwor"
if (password.length==8){
    console.log("password contains 8 characters!")
}
else if (password.length<8){
    console.log("the password is less than 8 characters")
}    
else {
    console.log(password)
}
var num = 31
if (num%5==0 || num%3==0){
    console.log("Num is divisible by 5 or 3")
}
else {
    console.log("Num is not divisible by 5 or 3")
}

var num = 25

if (num%5==0){
    console.log("buzz")
}
else if (num%3==0){
    console.log('fizz')
}
else if(num%3==0 && num%5==0){
    console.log('fizz buzz')
}
else {
    console.log(num)
}

/*var num = 7171
num.toString
var numlen = num.length
if (numlen%2==0){
    num = 
}
else {
    console.log("num is not a palindrome")
}
*/

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

var time = 1420
var placeOfWork = 'manchester' 
var townOfHome = 'oldham'


if (time >= 0900 && time <= 1700){
    console.log(`I\'m at work in ${placeOfWork}`)
}
else if ((time >= 0730 && time <= 0899) || (time >=1701 && time <=1830)){
    console.log('I\'m commuting')
}
else {
    console.log(`I\'m at home in ${townOfHome}`)
}



let space1 = 'o'
let space2 = 'o'
let space3 = 'o'
let space4 = 'x'
let space5 = 'x'
let space6 = ''
let space7 = 'o'
let space8 = ''
let space9 = ''


console.log(`   |    |    `)
console.log(`  ${space1}|  ${space2} |  ${space3} `)
console.log(`   |    |    `)
console.log(`-------------`)
console.log(`   |    |    `)
console.log(` ${space4} | ${space5}  |  ${space6} `)
console.log(`   |    |    `)
console.log(`-------------`)
console.log(`   |    |    `)
console.log(`  ${space7}|  ${space8}  |  ${space9} `)
console.log(`   |    |    `)

if (space1 =='o' && space2 =='o' && space3 =='o') {
    console.log('You\'ve won!')
}

var word = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
console.log(word[-1]);

for (x in word){

}

var word = ""
if (word[0] && word[-1]){
    
}