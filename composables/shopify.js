import Client from 'shopify-buy'

const shopifyClient = Client.buildClient({
  domain: 'demo-store-storyblok.myshopify.com',
  storefrontAccessToken: 'b49c9c4fb3b46498ed30cf7e4ac3821b',
})

export const fetchShopifyProductData = (productID) => {
  const productTitle = ref(null)
  const productImage = ref(null)
  const productPrice = ref(null)
  const productAvailability = ref(null)

  const fetch = async () => {
    shopifyClient.product.fetch(productID).then((fetchedProduct) => {
      productTitle.value = fetchedProduct.title
      productImage.value = fetchedProduct.images[0].src
      productPrice.value = fetchedProduct.variants[0].price
      productAvailability.value = fetchedProduct.variants[0].available
    })
  }

  fetch()

  return { productTitle, productImage, productPrice, productAvailability }
}

export const fetchShopifyProductsByCategory = (categoryID) => {
  const products = reactive([])

  const fetch = async () => {
    shopifyClient.collection
      .fetchWithProducts(categoryID, { productsFirst: 10 })
      .then((collection) => {
        collection.products.forEach((product) => {
          products.push({ id: product.id })
        })
      })
  }

  fetch()

  return products
}
