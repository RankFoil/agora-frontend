<script setup>

defineProps({
    onClick: Function,
    icon: String
})
</script>

<template> 
    <button type="button" v-on:click="onClick" :class="className">
        <svg class="icon" :class="icon"></svg>
        <slot></slot>
    </button>
</template>