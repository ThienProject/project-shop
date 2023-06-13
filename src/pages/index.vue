<template>
  <div class="tw-relative">
    <Container>
      <ProductSliced />
    </Container>
    <div><img class="tw-top-0 tw-z-0" src="/src/assets/images/bg_top_home.jpg" /></div>
  </div>
</template>

<script lang="ts" setup>
import Container from '@/components/base/Container.vue'
import ProductSliced from '@/components/home/ProductSliced.vue'
</script>

<route lang="yaml">
name: Home Page
meta:
  requiresAuth: false
  layout: 'default'
</route>
