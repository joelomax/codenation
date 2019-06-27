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