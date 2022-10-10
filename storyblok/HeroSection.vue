<template>
  <section
    v-editable="blok"
    class="min-h-[600px] relative flex items-end justify-center p-9"
  >
    <div class="relative z-20 text-center">
      <h2 class="text-6xl text-white font-bold mb-3">
        {{ blok.headline }}
      </h2>
      <h3 class="text-4xl text-white font-light">
        {{ blok.subheadline }}
      </h3>
    </div>
    <img
      :src="optimizedImage"
      alt=""
      class="absolute top-0 left-0 object-cover w-full h-full"
    />
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const optimizedImage = computed(() => {
  return props.blok.image.filename + '/m/1600x0'
})
</script>

<style scoped>
section::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10;
}
</style>
