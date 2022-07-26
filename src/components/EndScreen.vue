<template>
<div id="end">
  <h1 id="endHeading">
    <span style='color: #ff8d01'>E</span>
    <span style='color: #df0004'>N</span>
    <span style='color: #ff018a'>D</span>
    <span style='color: #842892'>E</span>
  </h1>
  <p id="endTxt">
    Ihr habt {{correctlyIdentified}} Karten richtig erkannt. <br>
    {{quotes[correctlyIdentified]}}
  </p>
  <button id="reset" @onClick="reset">
    <span style='color: #ff018a'>R</span>
    <span style='color: #842892'>E</span>
    <span style='color: #0091d6'>S</span>
    <span style='color: #04aa38'>E</span>
    <span style='color: #fec300'>T</span>
  </button>
</div>
</template>

<script setup>
import {useStore} from './stores/store.js'
import { storeToRefs } from 'pinia'
const store = useStore()
const { start } = store
const { correctlyIdentified } = storeToRefs(store)
const quotes=[
  "Übung macht den Meister.",
  "Übung macht den Meister.",
  "Übung macht den Meister.",
  "Übung macht den Meister.",
  "Das ist ein guter Anfang. Versucht es noch einmal!",
  "Das ist ein guter Anfang. Versucht es noch einmal!",
  "Das ist ein guter Anfang. Versucht es noch einmal!",
  "Ein beachtliches Ergebnis. Könnt ihr das noch besser?",
  "Ein beachtliches Ergebnis. Könnt ihr das noch besser?",
  "Wow, ihr seid ein starkes Team!",
  "Wow, ihr seid ein starkes Team!",
  "Genial, dieses Ergebnis kann sich sehen lassen!",
  "Unglaublich! Ihr seid Just One vom perfektem Ergebnis entfernt.",
  "Perfektes Ergebnis! Schafft ihr das noch mal?",
]
</script>

<style>

  #end{
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
</style>