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
        :book="book"
        @changeBookmark="changeBookmark(book)"
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
      books: [],
      // apiUrl: 'http://localhost:4730/books?_page=${state.page}&_limit=${state.row * 5}'
      apiUrl: 'https://book-api.lanixx.com/books?_page=${state.page}&_limit=${state.row * 5}'
    }
  },

  methods: {
    changeBookmark(book) {
      book.isBookmarked = !book.isBookmarked
    },

    async getAllBooks() {
      fetch(this.apiUrl)
        .then((res) => res.json())
        .then((booksFromApi) => {
          this.books = booksFromApi
        })
        .catch(() => {
          console.log('database not available')
        })
    }
  },

  created() {
    this.getAllBooks()
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
