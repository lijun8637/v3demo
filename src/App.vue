<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <router-view />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
