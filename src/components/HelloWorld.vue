<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { FETCH_URL } from '../utils/const'

defineProps<{ msg: string }>()

const result = ref({})
const test = async () => {
  const response = await fetch(FETCH_URL)
  result.value = await response.json()
}
onMounted(async () => {
  await test()
})
</script>

<template>
  <img src="/vite.svg" class="logo" alt="Vite logo" />
  <h1>props: {{ msg }}</h1>
  <div>fetch: {{ result }}</div>
</template>
