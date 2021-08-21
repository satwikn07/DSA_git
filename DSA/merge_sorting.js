function runProgram(input) {
    let inp = input.trim().split("\n");
    let n = +inp[0]
    let arr = inp[1].trim().split(" ").map(Number)
    console.log(MergeSort(arr).join(" "));
    
}
function MergeSort(arr) {
    if (arr.length < 2) return arr;

    let half = Math.floor(arr.length / 2);

    let left_arr = arr.slice(0,half);

    let right_arr = arr.slice(half,arr.length)

    return Merge(MergeSort(left_arr),MergeSort(right_arr))
}
function Merge(left_arr,right_arr) {
    let arr = [];
    while(left_arr.length && right_arr.length){
        left_arr[0] < right_arr[0] ? arr.push(left_arr.shift()) : arr.push(right_arr.shift());
    }
    return [...arr,...left_arr,...right_arr];
}


  
  if (process.env.USERNAME === "THIS-PC") {
    runProgram(`
    5
3 5 0 9 8
      `);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }