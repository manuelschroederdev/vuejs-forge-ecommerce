<template>
  <div class="bg-[#1c243d]">
    <ul
      class="container grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
    >
      <ProductGridItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Object,
    required: true,
  },
})
</script>
