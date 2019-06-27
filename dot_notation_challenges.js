var i = "123456789abcdefghijklmnop";


console.log(i.search(9));
console.log(i.lastIndexOf("j"));


//how .slice and .substring are the same
//following two examples return empty strings
console.log(i.slice(4,4));
console.log(i.substring(4,4));
//just putting a single argument means the whole string is returned
console.log(i.slice(4));
console.log(i.substring(4));
//if the second argument is greater than the string's length the string's length will be used instead
console.log(i.slice(1,40));
console.log(i.substring(1,40));
//how .slice and .substring are different
//if start > end returns empty string
console.log(i.slice(20,2));
//if in .substring start > end the numbers are swapped
console.log(i.substring(20,2));
//.slice accepts minus numbers, counting from the end of the string whereas .substring only returns an empty string
console.log(i.slice(-16, -3));
console.log(i.substring(5, -3));
//.substring and .slice are different to .substr because .substr takes start and length arguments
console.log(i.substr(4,7));


//finds specified value in string and replaces with other specified value
console.log(i.replace("abcdefghijklmnop","qwertyuiopasdfghjkl"));
//does not effect original string
console.log(i);

//.concat concatenates strings
var j = "zxcvbnm";
console.log(i.concat(j));

//returns character at specified character index
console.log(i.charAt(6));