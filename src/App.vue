<script>

import axios from 'axios';

import HeaderApp from './components/HeaderApp.vue';
import AppMain from './components/AppMain.vue';

import {store} from './data/store';

export default {

  name: 'App',

  components:{

    HeaderApp,
    AppMain

  },

  data(){
    return{

      store

    }
  },

  methods: {

    getApi(){
      store.isLoaded = false;
      axios.get(store.apiUrl)
      .then(result => {
      store.charactersList = result.data;
      store.isLoaded = true;
      })
    }

  },

  mounted(){

    this.getApi()
    
  }

}

</script>

<template>

  <HeaderApp title="Breaking Bad Api" />

  <AppMain/>
  
</template>

<style lang="scss">

  @use './style/general.scss'

</style>
