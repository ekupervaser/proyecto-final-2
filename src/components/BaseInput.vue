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
        class="border rounded px-2 py-1 mb-2 w-full transition"
        :class="{
            'border-[#94D1BF]': true,              // Estado básico
            'hover:border-[#A8D9CD]': true,        // Hover
            'focus:border-[#7BB8A6]': true,        // Focus
            'disabled:bg-[#C1E5DF]': true,         // Disabled
            'focus:ring-0': true,                  // Eliminar el anillo de enfoque predeterminado
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="loading"
    >
</template>