import { createRouter, createWebHistory } from 'vue-router'
import BookList from '@/components/BookList.vue'
import SingleBook from '@/views/SingleBook.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'book',
    component: SingleBook
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
