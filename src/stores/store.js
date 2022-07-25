// stores/store.js
import { defineStore } from 'pinia'
import words from './words.json'

export const useStore = defineStore('store', {
  state: () => {
    return { 
            correctlyIdentified: localStorage.getItem('correctlyIdentified') || 0,
            currentCard: localStorage.getItem('currentCard') || 0,
            startScreen: localStorage.getItem('startScreen')==="true" || true,
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
      localStorage.setItem('start', false)
    },
    generateCards(){
      
    }
  },
})