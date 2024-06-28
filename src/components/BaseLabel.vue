<script>
export default {
    name: 'BaseLabel',
    props: { 
        modelFor: {
        type: String,
        required: true,
        }
    }
}
</script>

<template>
    <label class="block font-bold" :for="modelFor"></label>
    <slot></slot>
</template>