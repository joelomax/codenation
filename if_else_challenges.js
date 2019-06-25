//challenge 3

var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
for (x in list) {
    if (x%5==0){
        if (x%3==0) {
            console.log('FizzBuzz')
        }
        else {
            console.log('Buzz')
        }
    }
    else if (x%3==0) {
        console.log('Fizz')
    }
    else {
        console.log(x) 
    }
}
//challenge 4


//challenge 6

function last_occuring_vowel(string){
    var word = string
    var lastA = word.lastIndexOf('a');
    var lastE = word.lastIndexOf('e');
    var lastI = word.lastIndexOf('i');
    var lastO = word.lastIndexOf('o');
    var lastU = word.lastIndexOf('u');
    var vowels = [lastA, lastE, lastI, lastO, lastU];
    vowels.sort();
    var lastoccuringvowel = vowels.slice(4);
    console.log(vowels);
    console.log(lastoccuringvowel);
}
last_occuring_vowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"); 

//challenge 7 
 
var word = 'veryvl';
var i = word.length;
if (word[0] == word[i-1]){
    console.log('the first and last letters are the same');
}
else {
    console.log('the first and last letters are not the same');
}

//challenge 8
var num1 = 2;
var num2 = 3;
if ((num1 + num2)%2==0){
    console.log(num1+num2)
}
else {
    console.log(num1*num2);
}