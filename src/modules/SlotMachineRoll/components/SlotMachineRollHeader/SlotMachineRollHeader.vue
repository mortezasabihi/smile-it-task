<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'
import useSlotMachineRollStore from '@/modules/SlotMachineRoll/store/useSlotMachineRollStore'

const { isStarted, isSpinning, isWinning, credit, start, end, roll, cashOut: cashOutMoney } = useSlotMachineRollStore()

function rollAgain() {
  if (credit.value < 1) {
    alert('You have no credits left!')
    end()
    return
  }

  isSpinning.value = true
  isWinning.value = false

  setTimeout(() => {
    roll()

    isSpinning.value = false
  }, 1000)
}

function cashOut() {
  const amount = cashOutMoney()
  alert(`You cashed out ${amount} credits.`)
}
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <div class="flex items-center gap-x-5">
      <h1 class="text-3xl font-black tracking-wide">
        Slot Machine Roll
      </h1>

      <span
        v-if="isStarted"
        class="font-bold rounded-3xl flex py-2 px-4 items-center gap-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      >
        <span>Credit:</span>
        <span data-test="credit-value">{{ credit }}</span>
      </span>
    </div>

    <div class="flex items-center gap-x-4">
      <BaseButton v-if="isStarted && credit > 0" data-test="cash-out-btn" variant="outlined" @click="cashOut">
        Cash Out
      </BaseButton>

      <BaseButton v-if="isStarted" data-test="roll-again-btn" color="secondary" :disabled="isSpinning" @click="rollAgain">
        Roll Again
      </BaseButton>
      <BaseButton v-else data-test="roll-btn" @click="start">
        Roll
      </BaseButton>
    </div>
  </div>
</template>
