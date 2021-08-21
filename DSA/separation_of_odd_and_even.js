function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    //We dont know for 3 elements
    for(let t=0,line=1;t<tests;t++){
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        let q = +input[line++]
        if(q==1){
            console.log(even_odd(arr,n));
        }else{
            console.log(odd_even(arr));
        }
            
    }

}
function odd_even(arr){
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        if(arr[l]%2==0 && arr[r]%2==1){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }else if(arr[l]%2==1 && arr[r]%2==0){
            l++;
            r--;
        }else if(arr[l]%2==1){
            l++;
        }else if(arr[r]%2==0){
            r--
        }
    }
    
    return arr
}
function even_odd(arr,n){
    let l = 0;
    let r = 1;
    while(l<r && r<n){
        if(arr[l]%2==1 && arr[r]%2==0){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r++;
        }else if(arr[l]%2==0 && arr[r]%2==1){
            l++;
            r++;
        }else if(arr[l]%2==0){
            l++;
        }else if(arr[r]%2==1){
            r++
        }
    }
    
    return arr
}           
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2
`);
}
else{

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
}