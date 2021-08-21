function SearchingChallenge(num) { 

    // code goes here  
    num = (num+1).toString();
    console.log(num);
    let rev = ""
    for(let i=num.length-1;i>=0;i--){
        rev += num[i]
    }
    if(num==rev){
      return Number(num)
    }
    return SearchingChallenge(Number(num))
  
}
     
  // keep this function call here 
  console.log(SearchingChallenge(490));