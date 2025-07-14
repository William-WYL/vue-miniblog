<script setup>
import { useBlogStore } from '@/stores/blogs'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const blogStore = useBlogStore()
const blog = blogStore.getBlogById(id)
</script>

<template>
  <div class="blog-details">
    <h2>{{ blog.title }}</h2>
    <p><strong>Author:</strong> {{ blog.author }}</p>
    <p><strong>Date:</strong> {{ blog.date }}</p>
    <p>{{ blog.content }}</p>
    <div v-if="blog.comments">
      <h3>Comments</h3>
      <div v-for="comment in blog.comments" :key="comment.id" class="comment">
        <p>
          <strong>{{ comment.author }}</strong> ({{ comment.date }})
        </p>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
