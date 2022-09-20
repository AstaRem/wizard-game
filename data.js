export const characterData = {
    hero: {
       name : "Wizard",
       avatar : "images/wizard.png",
       health : 100,
       diceCount: 3,
       currentDiceScore: []
    },
    
    orc: {
       name: "Orc",
       avatar: "images/orc.png",
       health: 20,
       diceCount: 1,
       currentDiceScore: []

    },
    demon: {
      name: "Demon",
      avatar: "images/demon.png",
      health: 25,
      diceCount: 2,
      currentDiceScore: []
  },
  goblin: {
      name: "Goblin",
      avatar: "images/goblin.png",
      health: 20,
      diceCount: 3,
      currentDiceScore: []
  }

 }

 // or we can say:
//  export default characterData  - IMPORTANT TO NOTICE-export default only allows to export ONLY ONE thing from a file
 //and then in import file we can call this variable whatever name we like and we do not need {} in import

 //if we use named export const ... here, then in import we need { variableName }
 // in export file we can add export straight before variable declaration or we can write a separate line:
 // export { variableName }
 