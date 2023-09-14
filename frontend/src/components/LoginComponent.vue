<template>
  <div class="bg-[#284B63] min-h-screen flex items-center justify-center flex-col">
    <div class='items-center flex flex-col scale-[1.7]'>
      <LogoComponent />    
      <div class="bg-white rounded-xl shadow-2xl p-5">
        <form class="mb-1">
          <label for="email" class="block mb-1 font-semibold text-2xl font-josefin">
            Email
            <input type="email" placeholder="Email" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="email">
          </label>
        </form>
        <form>
          <label for="password" class="block mb-1 font-lato font-semibold text-2xl font-josefin">
            Senha
            <div class="relative flex items-center">
              <input type="password" placeholder="Senha" class="font-montserrat bg-stone-300 p-3  rounded-md w-full placeholder-gray-500 text-xs" v-model="password">
              <font-awesome-icon icon="fa-eye" class="absolute right-3 text-gray-500 cursor-pointer w-5" />
            </div>
          </label>
        </form>
        <div class="flex">
          <button class='p-2 rounded-md bg-[#FFBD70] mt-5 hover:scale-105 w-full ease-in duration-300 font-josefin basis-5 mr-4' type="submit" v-on:click="submitForm">
              Entrar
          </button>
          <button class='p-2 rounded-md bg-[#FFBD70] mt-5 hover:scale-105 w-full ease-in duration-300 font-josefin' type="submit" v-on:click="submitForm">
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LogoComponent from './LogoComponent.vue'
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        const user = {
          email: this.email,
          password: this.password
        };

        axios.post('http://localhost:3000/auth/login', user)
          .then(res => {
            console.log(res.data)
          })
          .catch(error => {
            console.log(error.response.data)
          });
      }
    },
    components: {
      LogoComponent
    }
  };
</script>