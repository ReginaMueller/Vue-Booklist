<template>
  <h2>{{ bookData.title }}</h2>
  <h4>{{ bookData.subtitle }}</h4>
  <article class="bookview">
    <table>
      <tr valign="top">
        <td>author</td>
        <td class="value">{{ bookData.author }}</td>
      </tr>
      <tr valign="top">
        <td>abstract</td>
        <td class="value">{{ bookData.abstract }}</td>
      </tr>
      <tr valign="top">
        <td>publisher</td>
        <td class="value">{{ bookData.publisher }}</td>
      </tr>
      <tr valign="top">
        <td>ISBN</td>
        <td class="value">{{ bookData.isbn }}</td>
      </tr>
      <tr valign="top">
        <td>pages</td>
        <td class="value">{{ bookData.numPages }}</td>
      </tr>
      <tr valign="top">
        <td>price</td>
        <td class="value">{{ bookData.price }}</td>
      </tr>
    </table>
    <img :src="bookData.cover" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      isbn: this.$route.params.id,
      bookData: {},
      //   apiUrl: 'http://localhost:4730/books?q=' + this.$route.params.id
      apiUrl: 'https://book-api.lanixx.com/books?q=' + this.$route.params.id
    }
  },
  methods: {
    async getBookData() {
      fetch(this.apiUrl)
        .then((res) => res.json())
        .then((bookFromApi) => {
          this.bookData = bookFromApi[0]
        })
        .catch(() => {
          console.log('database not available')
        })
    }
  },

  created() {
    this.getBookData()
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 0;
  padding-bottom: 0.3rem;
}
h4 {
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 3rem;
}
.bookview {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.value {
  padding-left: 0.5rem;
}
</style>
