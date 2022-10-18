<template>
  <div
    class="flex flex-col bg-white rounded-[5px] overflow-hidden cursor-pointer max-w-sm lg:max-w-none"
  >
    <img :src="productImage" :alt="productTitle" class="pointer-events-none" />
    <div class="flex flex-col px-4 py-2 grow">
      <div class="grow">
        <ProductInfo
          :productTitle="productTitle"
          :productPrice="productPrice"
          :productAvailability="productAvailability"
        />
      </div>
      <AddToCartButton v-if="productAvailability" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const productID = props.product.id

const { productTitle, productImage, productPrice, productAvailability } =
  await fetchShopifyProductData(productID)
</script>
