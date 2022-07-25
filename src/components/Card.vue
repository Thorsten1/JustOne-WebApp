<template>
 <div id="wrapper">
  <ul id=wordList>
    <li v-for="word in props.words">{{word}}</li>
  </ul>
 </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
const props = defineProps({
  words: Array
})
</script>

<style scoped>
#wrapper{
  margin: 5px;
}
#wordList{
  list-style-type: decimal;
}
li {
  font-size: 5vh;
  border: 3pt solid black; 
  margin-bottom: 2vh;
}
li:nth-child(1) {
  color: #2190bc;
  border-color: #2190bc;
}

li:nth-child(2) {
  color: #8dae47;
  border-color: #8dae47;
}

li:nth-child(3) {
  color: #a83b53;
  border-color: #a83b53;
}

li:nth-child(4) {
  color: #a67b4d;
  border-color: #a67b4d;
}

li:nth-child(5) {
  color: #e9cb76;
  border-color: #e9cb76;
}
</style>