<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="background">
    <RouterView />
  </div>
</template>

<style scoped>
.background {
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
    margin: 0;
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>
