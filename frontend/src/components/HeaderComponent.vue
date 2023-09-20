<template>
  <div>
    <header class="flex p-3 py-5 shadow w-full max-h-15 justify-around items-center relative">
      <router-link to="/">
        <LogoComponent class="w-28"/>
      </router-link>
      <!-- Botão de ativação do menu dropdown -->
      <div class="relative inline-block text-5xl text-[#FFBD70] cursor-pointer" v-on:click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'circle-user']"/>
        <div v-if="menu" class="absolute top-full left-0  sm:w-auto sm:left-auto sm:right-0 bg-[#284B63] rounded-xl mt-2 sm:mt-0">
          <div v-if="!local" class="flex flex-col my-7 mx-6">
            <router-link to='/login' class="bg-[#FFBD70] text-black font-josefin rounded p-3 my-2 w-full text-xl">
              Entrar
            </router-link>
            <router-link to='/register' class="bg-[#FFBD70] text-black font-josefin rounded p-3 m-2 w-full text-xl">
              Cadastrar
            </router-link>
          </div>
          <div v-else class="flex flex-col my-7 mx-6">
            <button class="bg-[#FFBD70] text-black font-josefin rounded p-3 my-1 text-xl whitespace-nowrap">
              Perfil
            </button>
            <button class="bg-[#FFBD70] text-black font-josefin rounded p-3 my-1 text-xl whitespace-nowrap">
              Minhas Receitas
            </button>
            <button class="bg-[#FFBD70] text-black font-josefin rounded p-3 my-1 text-xl whitespace-nowrap">
              Criar Receita
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
export default {
  data() {
    return {
      local: '',
      menu: false
    };
  },
  mounted() {
     this.local = localStorage.getItem('token')
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    }
  },
  components: {
    LogoComponent,
  }
};
</script>
