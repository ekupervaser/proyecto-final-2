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
    <textarea 
      class="border border-blue-500 rounded p-1 w-full"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
    ></textarea>
</template>