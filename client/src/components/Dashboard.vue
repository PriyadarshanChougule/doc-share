<template>
    <div class="mt-2 lg:mx-32">
        <div class="flex justify-between mx-1">
            <div class="">
                <Button class="w-24">
                    New
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </Button>
            </div>
            <div class="mr-4">
                <Select v-model="selectedOption" :options="options" optionLabel="name" placeholder="Select an option"
                    class="w-20 md:w-56" />
            </div>
        </div>
        <div>
            <allDocuments />
        </div>
    </div>
</template>
<script setup>
import allDocuments from './allDocuments.vue';
import Select from 'primevue/select';
import { ref } from "vue";
import Button from 'primevue/button';
const selectedOption = ref();
const options = ref([
    { name: 'Created By You', code: 'SELF' },
    { name: 'Created By Anyone', code: 'ANYONE' },
    { name: 'Not Created By You', code: 'OTHER' }
]);
</script>