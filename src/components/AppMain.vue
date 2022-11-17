<script>

import CharactersCard from './CharactersCard.vue';
import LoadingComponent from './LoadingComponent.vue';

import {store} from '../data/store';

export default {

  name: 'AppMain',

  components: {

    CharactersCard,
    LoadingComponent

  },

  data(){
    return {

      store

    }
  }

}

</script>

<template>

  <main class="container-lg">

    <select class="form-select w-25 my-5" aria-label="Default select example">
      <option selected>Select category</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <div v-if="store.isLoaded" class="container-fluid bg-light p-5 rounded-2 mb-5">

      <p class="found text-light px-3 py-4 rounded-2 fs-5 mb-4">Found {{store.charactersList.length}} characters</p>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

        <CharactersCard v-for="character in store.charactersList" :key="character.char_id" :character="character"/>

      </div>

    </div>
    
    <div v-else class="text-center py-5">
      
      <LoadingComponent/>
      
    </div>

  </main>
  
</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

.found {
  background-color: $secondary-color;
} 

</style>