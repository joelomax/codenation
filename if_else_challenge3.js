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






