<template>
  <div>
     <v-header></v-header>
    <div>
      <slot />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import vHeader from '../components/header'
</script>

<style scoped>

</style>
