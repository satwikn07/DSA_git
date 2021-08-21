function StringChallenge(str) { 

    // code goes here
    str = str.trim().split(" ")
    let word = "";
    let max_rep_global = 1;
    for(let i=0;i<str.length;i++){
      let obj = {};
      for(let j=0;j<str[i].length;j++){
          obj[str[i][j]]?obj[str[i][j]]+=1:obj[str[i][j]]=1
      }
      let max_rep = 1
      for(key in obj){
        if(obj[key]>1 && obj[key]>max_rep){
            max_rep = obj[key]
        }
      }
    //   console.log(max_rep,str[i]);
      if(max_rep>max_rep_global){
          word = str[i]
          max_rep_global = max_rep
      }
    }
    if(max_rep_global>1){
        return word
    }
    return -1
    // return str; 
  
  }
str = "No words zzz bbbcab";
     
  // keep this function call here 
  console.log(StringChallenge(str));