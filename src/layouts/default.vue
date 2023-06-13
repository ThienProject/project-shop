<template>
  <div class="tw-min-h-screen">
    <Header />
    <div class="tw-w-full bg-body">
      <router-view />
      <!-- <div class="tw-px-6 tw-py-4 tw-w-full">
            
          </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout'
})
</script>

<script lang="ts" setup>
import Header from '@/components/base/Header.vue'
import Container from '@/components/base/Container.vue'
</script>
<style scoped></style>
