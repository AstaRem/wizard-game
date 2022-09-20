//creates array of random numbers
 function getDiceRollArray(diceCount){
    return new Array(diceCount).fill(0).map(() => {
       return Math.floor(Math.random() * 6) + 1
    })
 } 
 
 function getDicePlaceholderHtml(diceCount){
   return new Array(diceCount).fill(0).map(() => {
      return `<div class="placeholder-dice"></div>`
   }).join("")
}

let getPercentage = (remainingHealth, maximumHealth) => {
   return Math.round((100 * remainingHealth) / maximumHealth)
}



 export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }
 //or just could write export before a function declaration