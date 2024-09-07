<template>
   <li>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
   </li>
</template>

<script setup lang="ts">
interface Props
{
    item: any
}
const props = defineProps<Props>()
const item = toRefs(props).item

</script>
<style scoped>

</style>