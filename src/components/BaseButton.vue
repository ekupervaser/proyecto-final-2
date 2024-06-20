<script setup>
import Loader from './Loader.vue';

defineProps({
    loading: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <button class="my-3 py-2 px-3 rounded w-full bg-green-700 text-white hover:bg-green-600 disabled:bg-green-400 active:bg-green-800 transition" type="submit" 
    :disabled="loading"
    >
        <template v-if="!loading">
            <slot>Enviar</slot>
        </template>
        <template v-else>
            <Loader></Loader>
        </template>
    </button>
</template>