<template>
  <article class="book-view">
    <h1>All Books</h1>
    <section class="table">
      <section class="headline">
        <p>Name</p>
        <p>ISBN</p>
      </section>
      <BookListRow
        class="booklist"
        v-for="book in books"
        :key="book.isbn"
        :title="book.title"
        :isbn="book.isbn"
      />
    </section>
  </article>
</template>

<script>
import BookListRow from './BookListRow.vue'
export default {
  components: {
    BookListRow
  },
  data() {
    return {
      books: [
        {
          title: 'Practical Rust Web Projects',
          isbn: '9781484265888'
        },
        {
          title: 'Using WebPagetest',
          isbn: '9781491902592'
        },
        {
          title: 'Web Scraping with Python',
          isbn: '9781491910290'
        },
        {
          title: 'High Performance Mobile Web',
          isbn: '9781491912553'
        }
      ]
    }
  }
}
</script>

<style scoped>
.book-view {
  border-bottom: 1.5px solid blueviolet;
}
h1 {
  color: blueviolet;
  border-bottom: 1.5px solid black;
}
.headline {
  background-color: blueviolet;
  color: white;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  padding: 0.5rem;
}
.booklist {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
}

.booklist:nth-of-type(odd) {
  background-color: lightgrey;
}
</style>
