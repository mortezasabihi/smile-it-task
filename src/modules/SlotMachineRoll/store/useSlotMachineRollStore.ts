import { reactive, toRefs } from 'vue'
import type { SlotSymbol } from '../types/index'

// I think there is no need to install third-party store libraries (eg: pinia),
// and decided to create a custom global state from scratch using vue composables.

export const SYMBOLS: SlotSymbol[] = [
  {
    name: 'cherry',
    reward: 10,
  },
  {
    name: 'lemon',
    reward: 20,
  },
  {
    name: 'orange',
    reward: 30,
  },
  {
    name: 'watermelon',
    reward: 40,
  },
]

interface State {
  credit: number
  isStarted: boolean
  isSpinning: boolean
  isWinning: boolean
  result: SlotSymbol[]
}

const state = reactive<State>({
  credit: 0,
  isStarted: false,
  isSpinning: false,
  isWinning: false,
  result: [],
})

function useSlotMachineRollStore() {
  function start() {
    state.credit = 10
    state.isStarted = true
    state.result = _generateRandomResult()
  }

  function roll() {
    if (state.credit < 1)
      return

    if (state.credit < 40) {
      state.result = _generateRandomResult()
    }
    else if (state.credit >= 40 && state.credit < 60) {
      const shouldReroll = Math.random() < 0.3
      if (shouldReroll)
        state.result = _generateRandomResult()
    }
    else {
      const shouldReroll = Math.random() < 0.6
      if (shouldReroll)
        state.result = _generateRandomResult()
    }

    _calculateRewards()
  }

  function cashOut() {
    const amount = state.credit
    end()
    return amount
  }

  function end() {
    state.credit = 0
    state.isStarted = false
    state.result = []
    state.isSpinning = false
  }

  function _generateRandomResult() {
    const result: SlotSymbol[] = []
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * SYMBOLS.length)
      result.push(SYMBOLS[randomIndex])
    }
    return result
  }

  function _calculateRewards() {
    if (!state.result.length)
      return

    if (state.result.every(symbol => symbol.name === state.result[0].name)) {
      state.credit += state.result[0].reward
      state.isWinning = true
    }
    else { state.credit-- }
  }

  return {
    ...toRefs(state),
    start,
    end,
    roll,
    cashOut,
  }
}

export default useSlotMachineRollStore
