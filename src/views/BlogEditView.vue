<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useBlogStore } from '@/stores/blogs'
const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()
const blogId = route.params.id
const blog = ref({ title: '', content: '' })
onMounted(() => {
  const found = blogStore.blogs.find((b) => String(b.id) === String(blogId))
  if (found) {
    console.log(found)
    blog.value = { ...found }
  } else {
    router.push({ name: 'home' })
  }
})
const update = () => {
  const index = blogStore.blogs.findIndex((b) => String(b.id) === String(blogId))
  // Keep other items unchanged and Only update title and content
  const updatedBlog = {
    ...blogStore.blogs[index],
    title: blog.value.title,
    content: blog.value.content,
  }
  if (index !== -1) {
    blogStore.blogs.splice(index, 1, updatedBlog)
    router.push({ name: 'blog-detail', params: { index } })
  }
}
</script>
<template>
  <div class="wrapper">
    <form @submit.prevent="update" class="edit-form">
      <h3 class="form-title">Edit Blog</h3>
      <div class="form-group">
        <label class="form-label">Title</label>
        <input
          type="text"
          v-model="blog.title"
          class="form-input"
          placeholder="Enter blog title..."
        />
      </div>
      <div class="form-group">
        <label class="form-label">Content</label>
        <textarea
          rows="7"
          v-model="blog.content"
          class="form-textarea"
          placeholder="Write your blog content here..."
        ></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-btn">Update Blog</button>
        <button type="button" class="cancel-btn" @click="router.go(-1)">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-form {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
}

.form-title {
  color: #2d3748;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4299e1;
  background: white;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.submit-btn {
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.4);
}

.cancel-btn {
  background: transparent;
  color: #6c757d;
  border: 2px solid #6c757d;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.cancel-btn:hover {
  background: #6c757d;
  color: white;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .wrapper {
    padding: 1rem;
  }

  .edit-form {
    padding: 2rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }

  .submit-btn,
  .cancel-btn {
    width: 100%;
  }
}
</style>
