<template>
  <ul>
    <BlogItem v-for="item in list" 
    :key="item.id" 
    :item="item"/>   
  </ul>
</template>

<script setup lang="ts">
interface Props {
  list: any[];
}
const props = defineProps<Props>();
const { list } = toRefs(props);
</script>

<style scoped>

</style>