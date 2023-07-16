<script setup lang="ts">
import SlotMachineRollTableTd from './SlotMachineRollTableTd/SlotMachineRollTableTd.vue'
import useSlotMachineRollStore from '@/modules/SlotMachineRoll/store/useSlotMachineRollStore'

const { isStarted, isSpinning, result } = useSlotMachineRollStore()
</script>

<template>
  <div class="flex">
    <table v-if="isStarted" class="table-fixed w-full h-full border-[1rem] border-red-700 z-10">
      <tbody>
        <tr
          class="[&>td]:text-center [&>td]:text-xl [&>td]:font-bold [&>td]:tracking-widest [&>td]:border-l-[1rem] [&>td]:border-red-700 [&>td:first-child]:border-l-0"
        >
          <SlotMachineRollTableTd
            v-for="(symbol, index) in result" :key="index" :symbol="symbol"
            :is-spinning="isSpinning"
          />
        </tr>
      </tbody>
    </table>

    <div v-else class="flex-1 flex justify-center items-center">
      <h2 class="text-3xl font-medium select-none">
        Press the <strong
          class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600"
        >"Roll"</strong>
        Button
      </h2>
    </div>
  </div>
</template>
