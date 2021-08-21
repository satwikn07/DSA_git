function changeArrary(arr){
    var rows = arr.length
    var cols = arr[0].length
    var top = 0
    var bottom = rows-1
    var left = 0
    var right = cols-1
    while(top!=bottom && left!=right){
        for(let i=top;i<=bottom;i++){
            console.log(arr[i][left]);
        }
        for(let j=left+1;j<=right;j++){
            console.log(arr[bottom][j]);
        }
        left++;
        bottom--;
    }
    if(top==bottom){
        while(left<=right){
            console.log(arr[top][left]); 
            left++;
        }

    }
    
}
var arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
changeArrary(arr)
