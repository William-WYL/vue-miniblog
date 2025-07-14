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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 1rem;
  }
}
</style>
