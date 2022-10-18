<template>
  <section v-editable="blok" class="main-section container py-32">
    <div class="grid lg:grid-cols-2 place-items-center gap-16">
      <div class="order-last">
        <h2 class="text-5xl font-bold text-[#50b0ae] mb-6">
          {{ blok.headline }}
        </h2>
        <div class="text-xl leading-loose">
          {{ blok.description }}
        </div>
      </div>
      <div
        class="flex flex-col bg-white rounded-[5px] shadow-lg w-full border border-zinc-100 overflow-hidden cursor-pointer max-w-sm lg:max-w-none"
      >
        <img :src="productImage" :alt="productTitle" class="pointer-events-none" />
        <div class="p-4">
          <ProductInfo
            :productTitle="productTitle"
            :productPrice="productPrice"
            :productAvailability="productAvailability"
          />
          <AddToCartButton v-if="!productAvailability" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const productID = props.blok.product?.items[0]?.id

const { productTitle, productImage, productPrice, productAvailability } = await fetchShopifyProductData(productID)
</script>
