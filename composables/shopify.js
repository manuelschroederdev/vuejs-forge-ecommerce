import Client from 'shopify-buy'

const shopifyClient = () => {
  const runtimeConfig = useRuntimeConfig()
  return Client.buildClient({
    domain: 'vue-js-forge-ecommerce-workshop.myshopify.com',
    storefrontAccessToken: runtimeConfig.public.shopifyToken,
  })
}

export const fetchShopifyProductData = (productID) => {
  const productTitle = ref(null)
  const productImage = ref(null)
  const productPrice = ref(null)
  const productAvailability = ref(null)

  const fetch = async () => {
    shopifyClient().product.fetch(productID).then((fetchedProduct) => {
      productTitle.value = fetchedProduct.title
      productImage.value = fetchedProduct.images[0].src
      productPrice.value = fetchedProduct.variants[0].price
      productAvailability.value = fetchedProduct.variants[0].available
    })
  }

  fetch()

  return { productTitle, productImage, productPrice, productAvailability }
}
