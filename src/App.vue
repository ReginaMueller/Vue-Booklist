<template>
  <HeaderComponent />
  <article class="presentation">
    <BookList />
  </article>
</template>

<script>
import BookList from './components/BookList.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: {
    BookList,
    HeaderComponent
  }
}
</script>
<style>
.presentation {
  margin: auto;
  width: 50%;
}
</style>
