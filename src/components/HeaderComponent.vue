<template>
  <header>
    <p>📚📖👀 Tech Bookstore</p>
    <section>
      <router-link to="/" v-slot="{ href, route, navigate }">
        <button :href="href" @click="navigate" class="home-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
            />
          </svg>
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
