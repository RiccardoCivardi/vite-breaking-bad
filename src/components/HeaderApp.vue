<script>

export default {

name: 'HeaderApp',

props:{

  title: String

}
  
}

</script>

<template>

  <header>
    <img class="mx-5" src="/logo.png" alt="Breaking Bad Logo">
    <h1 class="text-light display-4 d-inline-block">{{title}}</h1>
  </header>
  
</template>


<style land="scss" scoped>

img{
  width: 150px;
}

</style>