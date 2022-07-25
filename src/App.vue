<template>
  <Card words=words />
</template>

<script setup>
import Card from './components/Card.vue'
  let words = ["Das","ist","ein","krasser","Test"]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>