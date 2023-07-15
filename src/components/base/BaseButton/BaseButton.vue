<script setup lang="ts">
import { colorClass } from './BaseButton.constants'
import type { Props } from './BaseButton.types'

const { color, variant } = withDefaults(defineProps<Props>(), {
  color: 'primary',
  variant: 'filled',
})

const buttonClasses = [colorClass[variant][color], variant === 'filled' ? 'text-white border-transparent' : 'hover:text-white']
</script>

<template>
  <button class="px-4 py-2 font-semibold rounded-lg border shadow-sm" :class="buttonClasses">
    <slot />
  </button>
</template>
