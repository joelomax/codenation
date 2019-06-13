
/*var age = 17;
if (age <19){
    var ticketPrice = 8.00;
} 
else if (age >18 && age <60){
    var ticketPrice = 10.00;
}
else if (age > 59){
    var ticketPrice = 7.00;
}
console.log(`please pay £ ${ticketPrice}`);

const pressGrindBeans = () => {
    console.log("grinding for 20 seconds")
}

const coffeeorder = (size, drinkType) => {
    console.log(`Hello! Your order for ${drinkType} in size ${size} is ready`)
}

coffeeorder("small","Mochachino")

const factorial = (n) => {
    if ((n===0) || (n===1)){
        return 1;
    }
    else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(5))

let orderCount = 0;

const takeOrder = (topping,size) => {
    console.log(`Order no:${orderCount}. ${size} pizza with ${topping}`);
    orderCount++;
}

takeOrder("pineapple","small")
takeOrder("mushroom", "large")
takeOrder("mushroom", "large")
takeOrder("mushroom", "large")
takeOrder("mushroom", "large")


const pin = 1234
const withdrawalRequest = 1000
const canWithdraw = (pinenter, request) => {
    const correctPin = 1234
    const balance = 999
    if (pin == correctPin && balance > withdrawalRequest) {
        return true
    }
    else {
        return false
    }    
}
    if (canWithdraw() == true){
        console.log("You can withdraw this amount")
    }
    else if (canWithdraw() == false) {
        console.log("INSUFFICIENT FUNDS.")
    }
}
Math.random
*/

//challenge 1



const fillBoard = (space1,space2,space3,space4,space5,space6,space7,space8,space9) => {



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

}

fillBoard("x","o","x","o","x","o","x","o","x");




/*
var money = 23
var hunger = 29

if (hunger > 50){
    console.log("I am hungry")
}
else if (hunger > 30 && hunger < 50 ){
    console.log("I\'m a bit hungry")
}
else {
    console.log("I\'m not hungry!")
}
*/