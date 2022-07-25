<template>
 <div id="wrapper">
  <ul>
    <li v-for="(word, index) in words">{{word}}</li>
  </ul>
 </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  words: Array
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>