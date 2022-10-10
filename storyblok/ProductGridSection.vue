<template>
  <section v-editable="blok" class="main-section py-32">
    <ProductGridHeader
      :headline="blok.headline"
      :subheadline="blok.subheadline"
    />
    <ProductGrid
      :products="blok.products.items"
    />
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
