//input: n,r  nth term and r
//here r = 2
function sum_gp(n,r){
    if(n==1){
        return 1
    }else{
        return 1/power(r,n-1) + sum_gp(n-1,r)
    }
}
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
console.log(sum_gp(2,2));