<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import LogoSection from '../components/LogoSection.vue'

const result = ref({})
const test = async () => {
  result.value = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  ).then((response) => response.json())
}

onMounted(async () => {
  await test()
})
</script>

<template>
  <LogoSection />
  <HelloWorld msg="Vite + Vue Single File " />
  <div>{{ result }}</div>
</template>
