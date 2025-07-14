<script setup>
import { useRouter } from 'vue-router'

defineProps({
  blog: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const goTo = (id) => {
  router.push({ name: 'blog-detail', params: { id } })
}
</script>

<template>
  <div class="blog-card" @click="goTo(blog.id)">
    <h3 class="blog-title">{{ blog.title }}</h3>
    <p class="blog-meta">Author: {{ blog.author }} || Date: {{ blog.date }}</p>
    <p>{{ blog.content.substring(0, 100) }}...</p>
  </div>
</template>

<style></style>
