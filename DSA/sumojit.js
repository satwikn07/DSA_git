let input = `5  3
        9 7 7 7 4`
function processData(input){
    //Enter your code here
    input = input.trim().split('\n')
    let [n,k] = input[0].trim().split('  ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    let count = 0;
    for(let i=0;i<n;i++){
        let flag = true;
        if(i+k<n){
            for(let j=1;j<=k;j++){
                if(arr[i]>arr[i+j]){
                    continue
                }else{
                    flag = false;
                    break
                }
            }
            if(flag){
                count++
            }
        }else{
            for(let j=i+1;j<n;j++){
                if(arr[i]>arr[j]){
                    continue
                }else{
                    flag = false;
                    break
                }
            }
            if(flag){
                count++
            }
        }
    }
    console.log(count);
}
processData(input)