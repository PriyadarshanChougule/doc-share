<template>
    <div class="container  mx-auto flex sticky border-b top-0 z-10 bg-white">
        <div class="mx-3 items-center h-16 w-full flex justify-between">
            <div class="hover:cursor-pointer" @click="$router.push({ path: '/dashboard' })">
                <img class="h-12 w-auto" src="../assets/images/docs-file-svgrepo-com.svg" alt="">
            </div>
            <div class="font-cursive font-extrabold">
                DOCx
            </div>
            <div class="flex flex-row font-bold hover:cursor-pointer" @click="logout()" v-if="isLoggedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 font-bold text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>

                <span class="ml-1 font-cursive hidden sm:block">
                    Logout
                </span>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
let isLoggedIn = ref(true)
function logout() {
    router.push({ path: '/' })
}

</script>

<style scoped></style>