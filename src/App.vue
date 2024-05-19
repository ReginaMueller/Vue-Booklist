<template>
  <HeaderComponent />
  <main class="presentation">
    <RouterView />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent
  }
}
</script>
<style>
.presentation {
  margin: auto;
  width: 70%;
}
</style>
