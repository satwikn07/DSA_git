gameState = [["x","o","o"],["o","x","x"],["o","x","0"]]
let moves= 8
const calculatewinner = (gameState,moves) =>{
    // console.log(gameState);
    for(let i=0,j=0; j<3;j++){
        // console.log(i,j);
        // console.log(gameState[i][j],gameState[i+1][j],gameState[i+2][j]);
        if(gameState[i][j]===gameState[i+1][j]){
            if(gameState[i+1][j]===gameState[i+2][j]){
                    return (`Winner is ${gameState[i][j]}`);}
        }
        
    }
    for(let j=0,i=0; i<3;i++){
        // console.log(i,j);
        // console.log(gameState[i][j],gameState[i][j+1],gameState[i][j+2]);
        if(gameState[i][j]===gameState[i][j+1]){
            if(gameState[i][j+1]===gameState[i][j+2]){
                return (`Winner is ${gameState[i][j]}`);

            }
        }
        
    }
    if(gameState[0][0]===gameState[1][1]){
        if(gameState[1][1]===gameState[2][2]){
            return (`Winner is ${gameState[0][0]}`);

        }
    }
    if(gameState[2][0]===gameState[1][1]){
        if(gameState[1][1]===gameState[0][2]){
            return (`Winner is ${gameState[2][0]}`);

        }
    }
    if(moves==9){
        return "draw"
    }
    else{
        return null
    }

        
    
}
console.log(calculatewinner(gameState));