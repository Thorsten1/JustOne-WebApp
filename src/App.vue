<template>
  <template v-if="currentCard<13">
    <Game id="game" v-if="!startScreen"/>
    <template v-if="startScreen">  
      <button id="start" @click="start"> 
        <span style='color: #ff8d01'>S</span>
        <span style='color: #df0004'>T</span>
        <span style='color: #ff018a'>A</span>
        <span style='color: #842892'>R</span>
        <span style='color: #0091d6'>T</span>
        <span style='color: #04aa38'>E</span>
        <span style='color: #fec300'>N</span>
      </button>
      <img src="https://cdn.svc.asmodee.net/production-rprod/storage/games/justone/justone-logo-1604323546mSp1o-large.png" id="startLogo">
      <p>Voll die krasse digitale Erweiterung für JustOne mit eigenen Begriffen</p>
    </template>
  </template>
  <EndScreen v-else/>
</template>

<script setup>
import Game from './components/Game.vue'
import EndScreen from './components/EndScreen.vue'
import {useStore} from './stores/store.js'
import { storeToRefs } from 'pinia'
const store = useStore()
const { start } = store
const { correctlyIdentified, currentCard, startScreen } = storeToRefs(store)
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
  }
  body{
    background: rgba(59,215,246,.5);
    height: 100vh;
    width: 100vw;
    margin: 0;
  }
  #start{
    font-size: 20vw;
    margin: 0;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%);
    border-radius: 5vw;
    border-color:#dcc08d;
    background: #fff6e6;
  }
  #startLogo{
    width:80vw;
  }
</style>