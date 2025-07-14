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
    <p class="blog-preview">{{ blog.content.substring(0, 100) }}...</p>
  </div>
</template>
<style scoped>
.blog-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 153, 225, 0.15);
  border-color: #4299e1;
}

.blog-title {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.blog-meta {
  color: #4299e1;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.blog-preview {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .blog-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .blog-title {
    font-size: 1.25rem;
  }

  .blog-meta {
    font-size: 0.8rem;
  }
}
</style>
