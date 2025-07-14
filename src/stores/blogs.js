import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogs', {
  state: () => {
    return {
      blogs: [
        {
          id: 1,
          title: 'Understanding Modern JavaScript Frameworks',
          author: 'Li Hua',
          date: '2025-05-28',
          content:
            'In this article, we will delve into modern JavaScript frameworks such as React, Vue, and Angular, exploring their core features and differences.',
          comments: [
            {
              author: 'Zhang Wei',
              date: '2024-05-29',
              content: 'Thanks for sharing, very informative!',
            },
            {
              author: 'Wang Min',
              date: '2024-05-30',
              content: "I've always been interested in Vue, but this article doesn't interest me.",
            },
          ],
        },
        {
          id: 2,
          title: 'CSS-in-JS: The Future of Styling in React',
          author: 'Chen Wei',
          date: '2025-06-15',
          content:
            'This article explores popular CSS-in-JS solutions like styled-components and Emotion, comparing their approaches to component-based styling.',
          comments: [
            {
              author: 'Liu Yang',
              date: '2025-06-16',
              content: 'Great overview! Would love to see performance benchmarks.',
            },
            {
              author: 'Zhao Xin',
              date: '2025-06-18',
              content: 'The examples using Emotion were particularly helpful. Thanks!',
            },
          ],
        },
        {
          id: 3,
          title: 'TypeScript Best Practices for Large Projects',
          author: 'Wang Jing',
          date: '2025-07-10',
          content:
            'Learn how to effectively use TypeScript in enterprise applications, with tips on type definitions, generics, and project organization.',
          comments: [
            {
              author: 'Li Ming',
              date: '2025-07-12',
              content: 'The section on generics was eye-opening. Great work!',
            },
            {
              author: 'Sun Hao',
              date: '2025-07-13',
              content: 'Could you add more examples of utility types? Otherwise very useful.',
            },
          ],
        },
      ],
    }
  },
  getters: {
    sorted: (state) => {
      return state.blogs.sort((a, b) => new Date(b.date) - new Date(a.date))
    },
  },
  actions: {
    addBlog(blog) {
      this.blogs.push({
        id: this.blogs.length + 1,
        title: blog.title,
        author: 'Wei Wang',
        date: new Date(),
        content: blog.content,
      })
    },
    getBlogById(id) {
      return this.blogs.find((blog) => blog.id === id)
    },
    updateBlog(id, updatedBlog) {
      const index = this.blogs.findIndex((b) => b.id === id)
      if (index !== -1) {
        this.blogs.splice(index, 1, { ...updatedBlog, id })
      }
    },
    deleteBlog(id) {
      const index = this.blogs.findIndex((b) => b.id === id)
      if (index !== -1) {
        this.blogs.splice(index, 1)
      }
    },
  },
  persist: true,
})
