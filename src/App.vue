<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  
  

  
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store';
  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter

    },
     data(){
      return {
        store: store,
      }
     }
  }
</script>

<style lang="scss" scoped>

</style>