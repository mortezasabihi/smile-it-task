<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="text-blue-700 font-black text-4xl">
    {{ count }}
  </div>
</template>
