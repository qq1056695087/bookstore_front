<template lang="html">
  <div class="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from "./Header";
// import BookList from "../page/BookList";
// import BookDetail from "../page/BookDetail";

export default {
  components:{
    vHeader,
    // BookList,
    // BookDetail
  }
}
</script>

<style lang="css" scoped>
</style>
