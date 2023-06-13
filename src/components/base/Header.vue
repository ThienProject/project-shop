<template>
  <div
    class="header tw-border tw-h-28 tw-flex tw-items-center tw-bg-gradient-to-r tw-from-header-purple tw-to-header-purple-brown tw-text-white"
  >
    <Container class="tw-flex tw-items-center tw-justify-between">
      <RouterLink to="/">
        <div class="tw-flex tw-items-center tw-cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tw-h-10 tw-w-10 tw-text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            font-size="16px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <span class="tw-ml-2 tw-text-xl tw-font-semibold text-[#252C32] uppercase"> GAMES </span>
        </div>
      </RouterLink>
      <nav class="tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-p-6">
        <div class="xs:tw-hidden">
          <button
            class="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-border-teal-400 hover:tw-text-text-color-hover tw-hover:border-white"
          >
            <svg
              class="tw-fill-current tw-h-3 tw-w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="tw-hidden xs:tw-block tw-flex tw-w-full tw-block tw-flex-grow lg:tw-flex tw-items-center tw-w-auto"
        >
          <div class="tw-flex tw-items-center tw-text-sm lg:tw-flex-grow">
            <a
              href="#responsive-header"
              class="tw-block tw-text-base tw-text-center lg:tw-inline-block lg:tw-mt-0 hover:tw-text-text-color-hover tw-mr-4"
            >
              <span class="tw-inline-block tw-align-middle">Docs</span>
            </a>
            <a
              href="#responsive-header"
              class="tw-block tw-text-base lg:tw-inline-block lg:tw-mt-0 hover:tw-text-text-color-hover tw-mr-4"
            >
              <span class="tw-inline-block tw-align-middle">Examples</span>
            </a>
            <a
              href="#responsive-header"
              class="tw-block tw-text-base lg:tw-inline-block lg:tw-mt-0 hover:tw-text-text-color-hover tw-mr-4"
            >
              <span class="tw-inline-block tw-align-middle">Blog</span>
            </a>
            <a
              href="#responsive-header"
              class="tw-block tw-text-base lg:tw-inline-block lg:tw-mt-0 hover:tw-text-text-color-hover"
            >
              <span class="tw-inline-block tw-align-middle">Download</span></a
            >
          </div>
        </div>
      </nav>
    </Container>
  </div>
</template>
<script setup lang="ts">
import Container from './Container.vue'
import { useGetUserCarts } from '@/api/products/query'
const { user, loggedIn, signOut } = useAuth()
const { data: cart } = useGetUserCarts(user.value.userId)
</script>

<style lang="scss" scoped>
.header {
}
</style>
