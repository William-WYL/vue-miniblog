<script setup></script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/blog-create" class="nav-link">Create a Blog</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
