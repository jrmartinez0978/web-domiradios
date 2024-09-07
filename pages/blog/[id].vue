<template>
    <div>
<h2>Blog Interno: {{ route.params.id }}</h2>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'blog'
})
const route = useRoute()
</script>

<style scoped>

</style>