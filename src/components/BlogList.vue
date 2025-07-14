<script></script>
<template>
  <div class="blog-list">
    <slot> </slot>
  </div>
</template>
<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .blog-list {
    padding: 1rem;
    margin: 0 0.5rem;
  }
}
</style>
