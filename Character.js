import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"





// Character constructor function
function Character(data){
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    this.maximumHealth = this.health 

 
    this.getDiceHtml = function(){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      this.diceArray = this.currentDiceScore.map((num) => {
         return `<div class="dice">${num}</div>`
      }).join("")
    }

this.takeDamage = function(attackScoreArray){
 
         let totalAttackScore = attackScoreArray.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
         })
         this.health -= totalAttackScore
         if(this.health <= 0){
            this.health = 0
            this.dead = true
             } 
   }
 
    this.getCharacterHtml = function(){
       const {name, avatar, health, diceCount, diceArray} = this
       const diceHtml = this.getDiceHtml(diceCount)
       const healthBar = this.getHealthBarHtml()
       return `
       <div class="character-card">
       <h4 class="name"> ${name} </h4>
       <img class="avatar" src="${avatar}"/>
       <p class="health">health: <b> ${health} </b></p>
       ${healthBar}
       <div class="dice-container">${diceArray}</div>
       </div>        
       `
    } 

      this.getHealthBarHtml = () => {
         const percent = getPercentage(this.health, this.maximumHealth)
         return  `<div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
         </div>`
     
      }

 }

 export default Character