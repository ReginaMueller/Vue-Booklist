<template>
  <article class="row">
    <p>{{ book.title }}</p>
    <p>{{ book.isbn }}</p>
    <button @click="changeBookmark" :class="book.isBookmarked ? `bookmarked` : ``">
      {{ book.isBookmarked ? 'Delete Bookmark' : 'Add Bookmark' }}
    </button>
  </article>
</template>

<script>
export default {
  props: {
    book: Object
  },
  emits: ['changeBookmark'],
  methods: {
    changeBookmark() {
      this.$emit('changeBookmark', this.isBookmarked)
    }
  }
}
</script>

<style scoped>
button {
  margin: 0.5rem;
  border: 2px solid blueviolet;
  color: blueviolet;
}
.bookmarked {
  background-color: blueviolet;
  color: white;
}
</style>
