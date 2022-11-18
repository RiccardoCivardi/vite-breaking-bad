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
    <img class="mx-3" src="/logo.png" alt="Breaking Bad Logo">
    <h1 class="text-light display-1 d-inline-block align-middle">{{title}}</h1>
  </header>
  
</template>


<style land="scss" scoped>



img{
  width: 150px;
}
h1 {
  text-shadow: 0 0 10px lightgreen;
}

</style>