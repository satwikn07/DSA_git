function power(num,n){
    if(n==0){
        return 1
    }
    if(n==1){
        return num
    }else{
        return num * power(num,n-1)
    }
}
console.log(power(3,4));