<template v-if="recipes" >
  <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
    <img class="w-full h-48 object-cover" :src="1" alt="Imagem do Card">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ recipe.title }}</div>
      <p class="text-gray-700 text-base">Descrição ou conteúdo do card. Você pode adicionar mais texto aqui para descrever o card em detalhes.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/recipes')
      .then(response => {
        console.log('Dados da API:', response.data);
        this.recipes = response.data;
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  },
   created() {
    console.log('Dados da API Created:', this.recipes);
  }
};
</script>
