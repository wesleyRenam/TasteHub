<template>
  <div>
    <HeaderComponent />
    <h1 class="bg-[#284B63] text-center font-josefin pt-3 text-6xl font-bold text-white">Minhas Receitas</h1>
    <div class="bg-[#284B63] w-full grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      <div v-if="isLoading">Loading</div>
      <div v-for="recipe in recipes" :key="recipe._id" class="" >
        <router-link :to="'/recipes/' + recipe._id" >
          <div class="max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
            <img class="w-full h-48 object-cover" :src="recipe.image" alt="Imagem do Card">
            <div class="p-3">
              <div class="font-bold text-xl mb-2">{{ recipe.title }}</div>
              <p class="text-gray-700 text-base">{{ recipe.description }}</p>
            </div>
            <div class="p-3 flex ">
              <span
                class="bg-[#FFBD70] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 inline-block mr-1"
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
    this.local = localStorage.getItem('token')
    axios.get('http://localhost:3000/recipes/my-recipes', { headers: {"Authorization" : `Bearer ${this.local}`} })
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
