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
    <button 
      class="my-3 py-2 px-3 rounded w-full text-white transition" 
      :class="{
        'bg-[#94D1BF]': !loading,
        'hover:bg-[#A8D9CD]': !loading,
        'active:bg-[#7BB8A6]': !loading,
        'disabled:bg-[#C1E5DF]': loading
      }"
      type="submit" 
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
  