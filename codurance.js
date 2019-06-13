function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
for (i in range(1,16)){
    if (i%3==0){
        console.log('fizz')
    }
        if (i%3==0 && i%5==0) {
        console.log('fizzbuzz')
        }
    else if (i%5 ==0){
        console.log('buzz')
    }
    else {
        console.log(i)
    }
}