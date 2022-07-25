<template>
  <img src="https://cdn.svc.asmodee.net/production-rprod/storage/games/justone/justone-logo-1604323546mSp1o-large.png" id="logo">
  <Card :words=words id="card"/>
</template>

<script setup>
import Card from './components/Card.vue'
const words = ["Das","ist","ein","krasser","Test"]
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
  body{
    background: rgba(59,215,246,.5);
    height: 100vh;
    width: 100vw;
    margin: 0;
  }
  #logo{
    width:10vh;
    position: absolute;
    top: 5px;
    right: 10px;
  }
  #card{
    margin-top: 10vh;
    margin-left:auto;
    margin-right:auto;
    border: 5px solid #dcc08d;
    padding: 10px;
    border-radius: 5%;
    background: #fff6e6;
    width: 85vw;
    
  }
</style>