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