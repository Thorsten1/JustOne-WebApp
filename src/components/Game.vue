<template>
  <div id="game">
    <img src="https://cdn.svc.asmodee.net/production-rprod/storage/games/justone/justone-logo-1604323546mSp1o-large.png" id="logo">
    <Card :words=cards[currentCard] id="card"/>
      <close-circle-outline id="fail" @click="submit(false)"/>
      <check-circle-outline id="success" @click="submit(true)"/>
  </div>
</template>

<script setup>
import { CheckCircleOutline, CloseCircleOutline } from "mdue"
import Card from './Card.vue'
import {useStore} from '../stores/store.js'
import { storeToRefs } from 'pinia'
const store = useStore()
const { identified, notIdentified } = store
const { currentCard, cards } = storeToRefs(store)
function submit(guessed){
  if(guessed){
    identified()
  }
  else{
    notIdentified()
  }
}
</script>

<style scoped>
  #game {
  display: grid;
  gap: 10px;
  justify-items: center;
}
  #logo{
    width:10vh;
    grid-column: 3 / 3;
    grid-row: 1;
    justify-self: end;
  }
  #card{
    grid-row: 2;
    border: 5px solid #dcc08d;
    padding: 10px;
    border-radius: 5%;
    background: #fff6e6;   
    grid-column: 1/4;
    margin: 10px;
    width: 85vw;
  }
  #fail{
    grid-row:3;
    grid-column: 1;
    font-size: 10.5vh;
    color:red;
    background:white;
    border-radius: 5.25vh;
    justify-self: end;
    margin-left: 15px;
  }
  #success{
    grid-row:3;
    grid-column: 3;
    font-size: 10vh;
    color:lightgreen;
    background:white;
    border-radius: 5vh;
    margin-right: 15px;
  }
</style>