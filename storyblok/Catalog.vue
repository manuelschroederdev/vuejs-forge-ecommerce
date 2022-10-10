<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <ProductGrid :products="products" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const categoryID = props.blok.category.items[0].id

const products = await fetchShopifyProductsByCategory(categoryID)
</script>
