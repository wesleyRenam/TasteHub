<template>
  <div class=" flex justify-center">
    <img :src="icon" alt="Ícone" />
  </div>
</template>

<script>
import icon from '@/assets/logoTasteHub.svg';

export default {
  data() {
    return {
      icon: icon
    };
  }
};
</script>