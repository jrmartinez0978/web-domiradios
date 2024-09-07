<template>
    <div>
        <h1>Ciudades</h1>
        <ul>
            <li v-for="(genre, index) in genres" :key="index">
                <img :src="getImageUrl(genre.img)" :alt="genre.name" />
                <p>{{ genre.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Genre } from '~/path-to-your-interface/genre'; // Ajusta la ruta según tu estructura de proyecto

const baseUrl = 'https://domiradios.com.do/appdomiradios/uploads/genres/'; // URL base donde se guardan las imágenes

const { data, pending, error, refresh } = await useFetch<Genre>('https://domiradios.com.do/appdomiradios/api/api.php?method=getGenres&api_key=eHJhZGlvcGVyZmVjdGFwcA')

const genres = computed(() => {
    if (data.value && data.value.datas) {
        return data.value.datas;
    }
    return [];
});

// Función para obtener la URL completa de la imagen
const getImageUrl = (imgPath: string) => {
    return `${baseUrl}${imgPath}`;
};

</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
}

img {
    width: 50px; /* Ajusta el tamaño según lo necesario */
    height: 50px;
    margin-right: 10px;
    object-fit: cover; /* Para que la imagen mantenga su relación de aspecto */
}

p {
    margin: 0;
}
</style>
