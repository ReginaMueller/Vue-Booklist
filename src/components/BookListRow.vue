<template>
  <article class="row">
    <p>{{ title }}</p>
    <p>{{ isbn }}</p>
    <button>Add Bookmark</button>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    isbn: String
  }
}
</script>

<style scoped>
button {
  margin: 0.5rem;
  border: 2px solid blueviolet;
  color: blueviolet;
}
</style>
