<template>
    <footer class="bottom-0 border-t py-3">
        <div class=" mx-auto px-4 flex justify-center items-center">
            <div class="font-sans">
                &copy; {{ year }} {{ name }}
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

let year = ref(new Date().getFullYear())
let name = ref("Priyadarshan")
</script>

<style scoped>
/* You can add additional styling here if needed */
</style>