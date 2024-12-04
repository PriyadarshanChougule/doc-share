<template>
    <div class="flex flex-grow justify-center items-center">
        <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-xl font-bold text-center mb-4">Login</h2>
            <form class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email"
                        class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-blue-500"
                        placeholder="Enter your email" />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password"
                        class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password" />
                </div>
                <button type="button" @click="navigateDashboard()"
                    class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Login
                </button>
                <div class="mt-1">
                    Don't have an Account? <span class="text-blue-600 hover:cursor-pointer"
                        @click="$router.push({ path: 'register' })">
                        Register </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function navigateDashboard() {
    console.log("in here");

    router.push({ path: '/dashboard' })
}
</script>