<script setup>
const { slug } = useRoute().params

const story = await useStoryblok(slug ? slug.join('/') : 'home', {
  version: 'draft',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
