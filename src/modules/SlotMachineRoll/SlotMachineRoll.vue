<script setup lang="ts">
import SlotMachineRollHeader from './components/SlotMachineRollHeader/SlotMachineRollHeader.vue'
import SlotMachineRollTable from './components/SlotMachineRollTable/SlotMachineRollTable.vue'
import useSlotMachineRollStore from './store/useSlotMachineRollStore'

const { isStarted, isWinning } = useSlotMachineRollStore()
</script>

<template>
  <div class="container flex flex-col bg-white p-10 absolute min-h-[calc(100vh-16rem)] overflow-auto overl top-16 bottom-16 shadow-xl shadow-red-300 rounded-xl left-1/2 transform -translate-x-1/2 border-2 border-gray-600">
    <SlotMachineRollHeader />

    <SlotMachineRollTable class="flex-1" :class="isStarted && isWinning && 'animate-shake'" />
  </div>
</template>
