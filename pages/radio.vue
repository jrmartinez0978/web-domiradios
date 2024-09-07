<template>
    <div class="container mx-auto py-8">
      <h1 class="text-2xl font-bold mb-6">Lista de Radios</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(radio, index) in radios" :key="index" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="getImageUrl(radio.img)" :alt="radio.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ radio.name }}</h2>
            <p class="text-sm text-gray-600 mb-2">Bitrate: {{ radio.bitrate }}</p>
            <p class="text-sm text-gray-600 mb-4">Tags: {{ radio.tags }}</p>
            <audio :src="radio.link_radio" controls class="w-full mb-4"></audio>
            <div class="flex justify-between items-center">
              <a :href="radio.url_facebook" target="_blank" class="text-blue-600 hover:underline">Facebook</a>
              <a :href="radio.url_twitter" target="_blank" class="text-blue-600 hover:underline">Twitter</a>
              <a :href="radio.url_instagram" target="_blank" class="text-blue-600 hover:underline">Instagram</a>
              <a :href="radio.url_website" target="_blank" class="text-blue-600 hover:underline">Sitio Web</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { Detalles, Data } from '~/path-to-your-interface/detalles'; // Ajusta la ruta según tu estructura de proyecto
  
  const baseUrl = 'https://domiradios.com.do/appdomiradios/uploads/radios/'; // Ajusta la URL base para imágenes
  
  const { data, pending, error, refresh } = await useFetch<Detalles>('https://domiradios.com.do/appdomiradios/api/api.php?method=getRadios&api_key=eHJhZGlvcGVyZmVjdGFwcA&offset=0&limit=10')
  
  const radios = computed<Data[]>(() => {
      if (data.value && data.value.datas.length > 0) {
          return data.value.datas;
      }
      return [];
  });
  
  // Función para obtener la URL completa de la imagen
  const getImageUrl = (imgPath: string) => {
      return `${baseUrl}${imgPath}`;
  };
  </script>
  
  
  
  
  