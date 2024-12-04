<template>
    <div :class="{ 'flex justify-center': data.length % 4 === 0, 'flex': true, 'flex-wrap': true, 'mb-2': true }">
        <div @click="navigateExistingDocument(d.id)" v-for="d in data" class="w-auto mx-1 mt-2 bg-white shadow-lg hover:cursor-pointer
            rounded-lg h-80 border border-gray-200 flex flex-col">
            <!-- Top Section (80% Data) -->
            <div class="p-6 flex-grow overflow-hidden">
                <h2 class="text-xl font-bold mb-2">{{ d.title }}</h2>
                {{ d.description }}
            </div>

            <!-- Divider -->
            <div class="border-t border-gray-300"></div>

            <!-- Bottom Section (Footer/Metadata) -->
            <div class="p-4 bg-gray-50 flex justify-between items-center">
                <span class="text-sm text-gray-600">Posted on: {{ d.lastUpdated.toDateString() }}</span>
                <button class="text-blue-500 hover:text-blue-700 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>

</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
let data = reactive([])
data = [
    {
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date(),
        id: 1
    },
    {
        id: 2,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
    {
        id: 3,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
    {
        id: 4,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
    {
        id: 5,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
    {
        id: 6,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
    {
        id: 7,
        title: "Vuejs",
        description: " this is description im writing.",
        lastUpdated: new Date()
    },
]

function navigateExistingDocument(id) {
    router.push({ path: `/document/${id}` })
}
</script>

<style scoped>
.card {
    @apply border shadow w-1/5;
}
</style>