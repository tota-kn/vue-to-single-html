<script setup lang="ts">
import { VITE_URL } from '../utils/constant'
</script>

<template>
  <div>
    <a :href="VITE_URL" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="font-bold underline">Hello world!</div>
  </div>
</template>
