<template>
  <LoginComponent />
  <RegisterComponent />
</template> 

<script>
  import LoginComponent from './components/LoginComponent.vue'
  import RegisterComponent from './components/RegisterComponent.vue'
  export default {
    name: 'App',
    components: {
      LoginComponent,
      RegisterComponent,
    }
  }

</script>