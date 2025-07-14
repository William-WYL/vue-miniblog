<script setup>
import router from '@/router'
import { useBlogStore } from '@/stores/blogs'
import { ref, computed } from 'vue'

const blog = ref({
  title: '',
  content: '',
})

const submit = () => {
  // console.log('Submitting blog:', blog.value)
  useBlogStore().addBlog(blog.value)
  router.push({ name: 'home' })
}

const isFormInvalid = computed(() => {
  return blog.value.title.trim() === '' || blog.value.content.trim() === ''
})
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <h3>Create New Blog {{ blog.title }}</h3>
      <div>
        <label>Title</label>
        <input type="text" v-model="blog.title" />
      </div>
      <div>
        <label>Content</label>
        <textarea rows="7" v-model="blog.content"></textarea>
      </div>
      <div>
        <button :disabled="isFormInvalid">Create</button>
      </div>
    </form>
  </div>
</template>
