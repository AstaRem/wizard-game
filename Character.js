import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"

/*
Challenge
1. Convert the constructor function to a class.

    Think about:
    1. Where do properties go?
    2. Where do Methods go?
*/

// we can use Character constructor function OR class - below
// function Character(data){
//     Object.assign(this, data)

//     this.diceHtml = getDicePlaceholderHtml(this.diceCount)
//     this.maximumHealth = this.health 

 
//     this.setDiceHtml = function(){
//       this.currentDiceScore = getDiceRollArray(this.diceCount)
//       this.diceHtml = this.currentDiceScore.map((num) => {
//          return `<div class="dice">${num}</div>`
//       }).join("")
//     }

// this.takeDamage = function(attackScoreArray){
 
//          let totalAttackScore = attackScoreArray.reduce((previousValue, currentValue) => {
//             return previousValue + currentValue
//          })
//          this.health -= totalAttackScore
//          if(this.health <= 0){
//             this.health = 0
//             this.dead = true
//              } 
//    }
 
//     this.getCharacterHtml = function(){
//        const {name, avatar, health, diceCount, diceHtml} = this
//        const healthBar = this.getHealthBarHtml()
//        return `
//        <div class="character-card">
//        <h4 class="name"> ${name} </h4>
//        <img class="avatar" src="${avatar}"/>
//        <p class="health">health: <b> ${health} </b></p>
//        ${healthBar}
//        <div class="dice-container">${diceHtml}</div>
//        </div>        
//        `
//     } 

//       this.getHealthBarHtml = () => {
//          const percent = getPercentage(this.health, this.maximumHealth)
//          return  `<div class="health-bar-outer">
//             <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
//             style="width: ${percent}%;">
//             </div>
//          </div>`
     
//       }

//  }

class Character {
   constructor(data){
      Object.assign(this, data)
      this.diceHtml = getDicePlaceholderHtml(this.diceCount)
      this.maximumHealth = this.health 
   
   }

   setDiceHtml (){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      this.diceHtml = this.currentDiceScore.map((num) => {
         return `<div class="dice">${num}</div>`
      }).join("")
    }


   takeDamage(attackScoreArray){
         let totalAttackScore = attackScoreArray.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
         })
         this.health -= totalAttackScore
         if(this.health <= 0){
            this.health = 0
            this.dead = true
               } 
   }

   getCharacterHtml(){
      const {name, avatar, health, diceCount, diceHtml} = this
      const healthBar = this.getHealthBarHtml()
      return `
      <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      ${healthBar}
      <div class="dice-container">${diceHtml}</div>
      </div>        
      `
   } 

     getHealthBarHtml(){
        const percent = getPercentage(this.health, this.maximumHealth)
        return  `<div class="health-bar-outer">
           <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
           style="width: ${percent}%;">
           </div>
        </div>`
    
     }

}




 export default Character
