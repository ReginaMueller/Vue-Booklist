<template>
  <header>
    <p>📚📖👀 Tech Bookstore</p>
    <section>
      <router-link to="/" v-slot="{ href, route, navigate }">
        <button :href="href" @click="navigate" class="home-button">
          {{ route.name }}
        </button>
      </router-link>
      <!-- <button @click="$router.push('/')">Home</button> -->
      <a href="coding-bootcamps.eu">coding-bootcamps.eu</a>
    </section>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: Blueviolet;
  padding: 0.8rem;
  color: white;
}
p {
  font-size: 1.4rem;
}
section {
  _display: flex;
}
.home-button {
  background-color: navy;
  color: white;
  padding: 0.5rem;
  margin: 0.8rem;
}
a {
  text-decoration: none;
  color: white;
}
</style>
