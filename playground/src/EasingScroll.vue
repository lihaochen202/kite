<script setup lang="ts">
import { easeInOutQuart, lock } from '@lihaochen/kite'

const handleScrollTop = lock(() => {
  return new Promise<void>((resolve) => {
    easeInOutQuart(window.scrollY, 0, 500, {
      update: val => window.scrollTo(0, val),
      finish: () => resolve(),
    })
  })
})
</script>

<template>
  <div v-for="item in 10" :key="item" class="h-30" />
  <div class="fixed bottom-2.5 right-2.5 w-5 h-5 rounded-full bg-blue-6 cursor-pointer" @click="handleScrollTop" />
</template>
