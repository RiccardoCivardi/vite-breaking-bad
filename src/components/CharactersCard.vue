<script>

export default {

  name: 'CharactersCard',

  props: {

    character: Object

  }

}

</script>

<template>

  <div class="col mb-3">
    <div class="card h-100 px-3">
      <img :src="character.img" class="card-img-top rounded-0 mt-2" :alt="character.nickname + ' picture'">
      <div class="card-body text-center">
        <h6 class="text-light text-uppercase mb-3">{{character.name}}</h6>
        <p class="card-text mb-1 fs-5">{{character.category}}</p>
        <p class="card-text mb-2">{{character.status}}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

.card {
  background-color: $primary-color;
  p {
    color: lighten($secondary-color, 20%);
  }
}

</style>