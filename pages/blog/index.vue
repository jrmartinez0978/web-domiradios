<template>
    <div>
<h1>
    Blog Page
</h1>
<!--<ul>
    <li v-for="item in list" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
    
    </li>
</ul>-->
<BlogList :list="list"/>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'blog'
})
    
const list = ref([
    {id: 1,
        title: 'curso nuxt',
        description: 'este es un curso de nuxt',
    },
    {id: 2,
        title: 'curso nuxt 2',
        description: 'este es un curso de nuxt',
    },
    {id: 3,
        title: 'curso nuxt 3',
        description: 'este es un curso de nuxt',
    },
])
</script>

<style scoped>

</style>