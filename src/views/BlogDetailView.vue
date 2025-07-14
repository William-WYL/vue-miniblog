<script setup>
import { useBlogStore } from '@/stores/blogs'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = Number(route.params.id)
const blogStore = useBlogStore()
const blog = blogStore.getBlogById(id)
</script>
<template>
  <div class="wrapper">
    <div class="blog-details">
      <header class="blog-header">
        <h1 class="blog-title">{{ blog.title }}</h1>
        <div class="blog-meta">
          <span class="meta-item"> <strong>Author:</strong> {{ blog.author }} </span>
          <span class="meta-item"> <strong>Date:</strong> {{ blog.date }} </span>
        </div>
      </header>

      <div class="blog-content">
        <p>{{ blog.content }}</p>
      </div>

      <div v-if="blog.comments" class="comments-section">
        <h3 class="comments-title">Comments</h3>
        <div v-for="comment in blog.comments" :key="comment.id" class="comment">
          <div class="comment-header">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-date">{{ comment.date }}</span>
          </div>
          <p class="comment-content">{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.blog-details {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.blog-header {
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.blog-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1rem;
  opacity: 0.9;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-content {
  padding: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3748;
}

.comments-section {
  border-top: 1px solid #e2e8f0;
  padding: 2rem;
  background: #f8fafc;
}

.comments-title {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4299e1;
}

.comment {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #4299e1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.comment-author {
  font-weight: 600;
  color: #2d3748;
}

.comment-date {
  font-size: 0.875rem;
  color: #718096;
}

.comment-content {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 1rem;
  }

  .blog-header {
    padding: 2rem 1.5rem;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  .blog-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .blog-content {
    padding: 1.5rem;
  }

  .comments-section {
    padding: 1.5rem;
  }

  .comment {
    padding: 1rem;
  }

  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
