<template>
  <div class="bg-[#284B63] min-h-screen min-w-screen flex items-center justify-center flex-col">
    <div class="items-center flex flex-col min-[600px]:scale-[1.5] md:scale-[1.7] xl:scale-[2.0]">
      <router-link to='/'>
        <LogoComponent />    
      </router-link>
      <div class="bg-white rounded-xl shadow-2xl p-5">
        <form class="mb-1" @submit.prevent="submitForm">
          <label for="email" class="block mb-1 font-semibold text-2xl font-josefin">
            Email
            <input type="email" placeholder="Email" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="email">
          </label>
          <label for="password" class="block mb-1 font-lato font-semibold text-2xl font-josefin">
            Senha
            <div class="relative flex items-center">
              <input :type="$store.state.typeField" placeholder="Senha" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="password">
              <font-awesome-icon v-on:click="showPass" icon="fa-eye" class="absolute right-3 text-gray-500 cursor-pointer w-5" />
            </div>
          </label>
        
          <p v-if="$store.state.errorResponseApi.message !== null" class="text-red-400 text-xs font-lato text-center w-full">{{$store.state.errorResponseApi.message}}</p>
          <div class="flex mt-2">
            <button class="p-2 rounded-md bg-[#FFBD70] hover:scale-105 w-full ease-in duration-300 font-josefin basis-5 mr-4" type="submit">
              Entrar
            </button>
            <button class="p-2 rounded-md bg-[#FFBD70] hover:scale-105 w-full ease-in duration-300 font-josefin">
              <router-link to='/register' v-on:click="clearState">Cadastre-se</router-link>
            </button>
          </div>
        </form>
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
    submitForm(e) {
      e.preventDefault()
      const user = {
        email: this.email,
        password: this.password
      };
      axios.post('http://localhost:3000/auth/login', user)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data)
        })
        .catch(error => {
          this.$store.state.errorResponseApi = error.response.data
        });
    },
    clearState() {
      this.$store.state.errorResponseApi = ''
      this.$store.state.typeField = 'password'
    },
    showPass() {
      this.$store.state.typeField === 'password' ? this.$store.state.typeField = 'text' : this.$store.state.typeField = 'password'
    } 
  },
  components: {
    LogoComponent
  }
};
</script>
