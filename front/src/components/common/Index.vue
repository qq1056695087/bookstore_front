<template lang="html">
  <div class="app">
    <v-header></v-header>
    <book-list></book-list>
  </div>
</template>

<script>
import vHeader from "./Header";
import BookList from "../page/BookList";


export default {
  components:{
    vHeader,
    BookList,
  }
}
</script>

<style lang="css" scoped>
</style>
