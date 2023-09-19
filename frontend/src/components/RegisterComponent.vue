<template>
  <div class="bg-[#284B63] min-h-screen flex items-center justify-center min-w-screen flex-col">
    <div class='items-center min-[600px]:scale-[1.5] md:scale-[1.7] xl:scale-[2.0]'>
      <router-link to='/'>
        <LogoComponent />    
      </router-link>
      <div class="bg-white rounded-xl grid shadow-2xl p-5">
        <div class="flex">
          <form class="mb-1 mr-2">
          <label for="email" class="block mb-1 text-base font-josefin">
            Nome
          </label>
          <input type="text" placeholder="Nome" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="name">
          </form>
          <form class="mb-1">
            <label for="email" class="block mb-1 text-base font-josefin">
              Email
            </label>
            <input type="email" placeholder="Email" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="email">
          </form>
        </div>
        <form>
          <label for="password" class="block mb-1 font-lato text-base font-josefin">
            Senha
            <div class="relative flex items-center">
              <input :type="$store.state.typeField"  placeholder="Senha" class="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="password">
              <font-awesome-icon icon="fa-eye" v-on:click="showPass" class="absolute right-3 text-gray-500 cursor-pointer" />
            </div>
          </label>

        </form>
        <form>
          <label for="confirmpassword" class="block mb-1 font-lato text-base font-josefin">
            Confirme a Senha
            <div class="relative flex items-center">
              <input :type="$store.state.typeField"  placeholder="Senha" class="font-montserrat bg-stone-300 p-3  rounded-md w-full placeholder-gray-500 text-xs" v-model="confirmpassword">
              <font-awesome-icon icon="fa-eye" v-on:click="showPass" class="absolute right-3 text-gray-500 cursor-pointer" />
            </div>
          </label>
        </form>
        <p v-if='$store.state.errorResponseApi.message !== null' class="text-red-400 text-xs font-lato text-center w-full" >{{$store.state.errorResponseApi.message}}</p>
        <p v-if='$store.state.responseApi.msg !== null' class="text-green-400 font-lato text-center w-full text-xs" >{{$store.state.responseApi.msg}}</p>
        <button class='p-2 rounded-md bg-[#FFBD70] hover:scale-105 w-full ease-in duration-300 font-josefin ' type="submit" v-on:click="submitForm">
            Cadastre-se
        </button>
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
          password: this.password,
          confirmpassword: this.confirmpassword,
          name: this.name
        };

        axios.post('http://localhost:3000/auth/register', user)
          .then(res => {
            console.log(res.data)
            this.$store.state.responseApi.msg = res.data
          })
          .catch(error => {
             this.$store.state.errorResponseApi = error.response.data
          });
      },
      showPass() {
        this.$store.state.typeField === 'password' ?  this.$store.state.typeField = 'text' : this.$store.state.typeField = 'password'
      }
    },
    components: {
      LogoComponent
    }
  };
</script>