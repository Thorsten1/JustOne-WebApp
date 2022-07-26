// stores/store.js
import { defineStore } from 'pinia'
import words from './words.json'

export const useStore = defineStore('store', {
  state: () => {
    return { 
            correctlyIdentified: localStorage.getItem('correctlyIdentified') || 0,
            currentCard: localStorage.getItem('currentCard') || 0,
            startScreen: localStorage.getItem('startScreen')?localStorage.getItem('startScreen')==="true":true,
            cards: JSON.parse(localStorage.getItem('cards')) || [],
            wordList: words
           }
  },
  actions: {
    identified() {
      this.correctlyIdentified++
      this.currentCard++
      localStorage.setItem('correctlyIdentified', this.correctlyIdentified)
      localStorage.setItem('currentCard', this.currentCard)
    },
    notIdentified() {
      this.currentCard++
      localStorage.setItem('currentCard', this.currentCard)
    },
    reset() {
      localStorage.removeItem('correctlyIdentified')
      localStorage.removeItem('currentCard')
      localStorage.removeItem('startScreen')
      localStorage.removeItem('cards')
    },
    start(){
      this.reset()
      localStorage.setItem('startScreen', false)
      this.startScreen = false
      this.generateCards()
    },
    generateCards(){
      let tempWords =this.wordList
      let tempCards = []
      let tempCard = []
      let index = 0;
      // for each card
      for(let i =0; i<13;i++){
        // choose 5 words
        for(let j =0;j<5;j++){
          index = Math.floor(Math.random()*tempWords.length)
          tempCard.push(tempWords[index])
          tempWords.splice(index,1)
        }
        tempCards.push(tempCard)
        tempCard = []
      }
      this.cards=tempCards
      localStorage.setItem('cards',JSON.stringify(this.cards))
    }
  },
})