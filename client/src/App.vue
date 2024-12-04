<script setup>
import { RouterView } from 'vue-router';
import navigation from './components/nav.vue'
import footerComp from './components/footer.vue';
</script>

<template>
  <div class="font-Urbanist flex flex-col min-h-screen container mx-auto">
    <navigation />
    <RouterView />
    <footerComp class="mt-auto" />
  </div>
</template>

<style scoped></style>
