<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    }
});

defineEmits(['update:modelValue']);
</script>

<template>
    <input 
    class="border border-blue-500 rounded p-1 mb-2 w-full disabled:bg-gray-100"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    >
</template>