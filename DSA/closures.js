// function randomFunc(){
//     for(let i = 0; i < 2; i++){
//       setTimeout(()=> console.log(i),1000);
//     }
//   }
  
// randomFunc();
function randomFunc(){
    for(var i=0;i<3;i++){
        (function(i){
            setTimeout(()=>console.log(i))
        })(i)
    }    
}
  
randomFunc();