<template>
  <div class="">
    <span>{{ productName }}</span>
  </div>
  <div>
    <div v-for="product in products" :key="product.productId">{{ product.productName }}</div>
  </div>
  <input
    name="productName"
    :value="value"
    placeholder="Enter product name here!"
    @input="handleChangeInput($event)"
  />
  <button @click="handleAddProduct">Add product</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const productName = ref('Product name')
const value = ref('')
const products = [
  { productId: '1', productName: 'socola' },
  { productId: '2', productName: 'lucky' }
]
const handleChangeInput = ($event) => {
  value.value = $event.target.value
}
const handleAddProduct = () => {
  if (value.value.trim()) {
    products.push({ productId: (products.length + 1).toString(), productName: value.value })
    value.value = ''
  } else {
    alert('Product Name cannot be empty!')
  }
}
</script>
