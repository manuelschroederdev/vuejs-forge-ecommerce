<template>
  <div class="container mb-12">
    <h2 class="text-5xl font-bold text-[#50b0ae] text-center mb-3">
      {{ headline }}
    </h2>
    <h3 class="text-2xl font-bold text-[#1d243d] text-center">
      {{ subheadline }}
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({ headline: String, subheadline: String })
</script>
