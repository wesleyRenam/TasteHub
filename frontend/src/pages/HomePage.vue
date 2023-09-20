<template>
  <div>
    <HeaderComponent />
    <div class="flex flex-wrap w-screen justify-center">
    <div v-if="isLoading">Loading</div>
    <div v-for="recipe in recipes" v-else :key="recipe._id" >
      <router-link :to="'/recipes/' + recipe._id">
        <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mx-1">
          <img class="w-full h-48 object-cover" :src="recipe.image" alt="Imagem do Card">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ recipe.title }}</div>
            <p class="text-gray-700 text-base">{{ recipe.description }}</p>
          </div>
          <div class="p-1 flex">
            <span
              class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 inline-block mr-1"
              v-for="tag in recipe.tags"
              :key="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  data() {
    return {
      recipes: [],
      isLoading: true,
    };
  },
  mounted() {
    axios.get('http://localhost:3000/recipes')
      .then(response => {
        this.recipes = response.data;
        this.isLoading = false
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  },
  components: {
    HeaderComponent,
  }
};
</script>
