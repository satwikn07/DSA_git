function gcd(num1,num2){
    let rem = num2%num1;
    if(rem==0){
        return num1
    }else{
       return gcd(rem,num1)
    }
}
console.log(gcd(36,60));