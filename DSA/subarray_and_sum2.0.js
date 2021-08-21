function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(n,k,arr);
   
    let total_sum = 0
    let size = 0
    for(let x=0;x<n;x++){
        total_sum += arr[x]
    }
    if(total_sum%k!=0){
        console.log(1);
    }
    
    else{
        
        let left = 0
        let sum = arr[0]
        let right = 0
        
        while(right<n && left<=right){
            if(sum%k!=0){
                
                if(right-left+1>size){
                    size = right-left + 1
                }
                right ++
                sum += arr[right]
                
                
            }
            else{
                sum -= arr[left]
                left ++
            }
            
        }
        // console.log(size);
    
    let pre = 0
    let pre_sum_array = arr.map((el)=>{
        pre = pre + el
        return pre
    })
    // console.log(pre_sum_array);
    let count = 0
   
    for(let s=0;(s+size-1)<n;s++){
        // console.log('inside for');
        if(s==0){
            sum = pre_sum_array[s+size-1]
        }
        else{
            sum = pre_sum_array[s+size-1] - pre_sum_array[s]
        }
        if(sum%k!=0){
            count++;
        }
       
    }
    console.log(count);
}
}         
         

if (process.env.USERNAME == "THIS-PC"){
    runProgram(`
    5 3
3 2 2 2 3
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