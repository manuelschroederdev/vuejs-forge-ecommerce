<template>
  <h4 class="text-xl font-bold text-[#1c243d] mb-3">
    {{ productTitle }}
  </h4>
  <span v-if="!productAvailability" class="text-[#50b0ae] font-bold"
    >{{ productPrice }} EUR</span
  >
  <span v-else class="text-[#ed6c61]">Out of stock</span>
</template>

<script setup>
defineProps({
  productTitle: String,
  productAvailability: Boolean,
  productPrice: String,
})
</script>
