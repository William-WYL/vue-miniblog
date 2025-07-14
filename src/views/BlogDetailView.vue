<script setup>
import { useBlogStore } from '@/stores/blogs'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const blogStore = useBlogStore()
const blog = blogStore.getBlogById(id)

const showDeleteConfirm = ref(false)

const deleteBlog = () => {
  blogStore.deleteBlog(id)
  router.push({ name: 'home' })
}
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
        <router-link class="edit-link" :to="{ name: 'blog-edit', params: { id: blog.id } }">
          Edit
        </router-link>
        <button class="delete-btn" @click="showDeleteConfirm = true">Delete</button>
      </div>
      <div v-if="showDeleteConfirm" class="confirm-dialog">
        <div class="dialog-content">
          <h3>Confirm Delete</h3>
          <p>Are you sure you want to delete this blog post?</p>
          <div class="dialog-actions">
            <button class="cancel-btn" @click="showDeleteConfirm = false">Cancel</button>
            <button class="confirm-delete-btn" @click="deleteBlog">Delete</button>
          </div>
        </div>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-details {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.blog-header {
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.blog-title {
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  line-height: 1.2;
}

.blog-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-item {
  color: #666;
  font-size: 0.9rem;
}

.blog-content {
  margin-bottom: 30px;
  line-height: 1.6;
  color: #444;
  font-size: 1.1rem;
}

.blog-content p {
  margin-bottom: 20px;
}

.edit-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  width: 80px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  margin-right: 15px;
}

.edit-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

.edit-link:active {
  transform: translateY(0);
}

.delete-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80px;
  height: 40px;
  gap: 8px;
  /* padding: 12px 20px; */
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.delete-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  background: linear-gradient(135deg, #e55353 0%, #c92a2a 100%);
}

.delete-btn:active {
  transform: translateY(0);
}

.confirm-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.dialog-content h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.4rem;
}

.dialog-content p {
  margin: 0 0 25px 0;
  color: #666;
  line-height: 1.5;
}

.dialog-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.cancel-btn {
  padding: 10px 20px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

.confirm-delete-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.confirm-delete-btn:hover {
  background: linear-gradient(135deg, #e55353 0%, #c92a2a 100%);
  transform: translateY(-1px);
}

.comments-section {
  border-top: 2px solid #f0f0f0;
  padding-top: 30px;
}

.comments-title {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.comment {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  border-left: 4px solid #667eea;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-author {
  font-weight: 600;
  color: #333;
}

.comment-date {
  color: #666;
  font-size: 0.85rem;
}

.comment-content {
  color: #555;
  margin: 0;
  line-height: 1.5;
}
</style>
