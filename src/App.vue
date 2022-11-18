<script>

import axios from 'axios';

import HeaderApp from './components/HeaderApp.vue';
import CharactersCard from './components/CharactersCard.vue';
import LoadingComponent from './components/LoadingComponent.vue';

import {store} from './data/store';

export default {

  name: 'App',

  components:{

    HeaderApp,
    CharactersCard,
    LoadingComponent

  },

  data(){
    return{

      store

    }
  },

  methods: {

    getApi(){
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params: {
          category : store.categoryToSearch
        }
      })
      .then(result => {
      store.charactersList = result.data;
      store.isLoaded = true;
      })
    }

  },

  mounted(){

    this.getApi()
    
  },

  computed: {

    getTotal(){
      return store.charactersList.length
    }

  }

}

</script>

<template>

  <HeaderApp title="Breaking Bad Api" />

  <main class="rc-container">

    <select @change="getApi()" v-model="store.categoryToSearch" class="form-select w-25 my-5" aria-label="Default select example">
      <option selected value="">Show All</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
    </select>

    <div v-if="store.isLoaded" class="container-fluid bg-light p-5 rounded-2 mb-5">

      <p class="found text-light px-3 py-4 rounded-2 fs-5 mb-4">Found {{getTotal}} characters</p>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

        <CharactersCard v-for="character in store.charactersList" :key="character.char_id" :character="character"/>

      </div>

    </div>
    
    <div v-else class="text-center py-5">
      
      <LoadingComponent/>
      
    </div>

  </main>
  
</template>

<style lang="scss">

@use './style/general.scss';
@use './style/partials/variables' as *;


.rc-container {
  width: 90%;
  margin: 0 auto;
}
.found {
  background-color: $secondary-color;
}



</style>
