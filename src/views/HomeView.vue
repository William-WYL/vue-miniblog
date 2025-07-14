<script setup>
import BlogItem from '@/components/BlogItem.vue'
import { useBlogStore } from '@/stores/blogs'

const blogStore = useBlogStore()
const blogs = blogStore.sorted
</script>

<template>
  <div class="wrapper">
    <BlogList>
      <div v-for="blog in blogs" :key="blog.id">
        <BlogItem :blog="blog" />
      </div>
    </BlogList>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 1rem;
  }
}
</style>
