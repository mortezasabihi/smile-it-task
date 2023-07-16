import useSlotMachineRollStore from './useSlotMachineRollStore'

describe('modules/SlotMachineRoll/store/useSlotMachineRollStore.ts', () => {
  it('should initialize the state correctly', () => {
    const { credit, isStarted, isSpinning, isWinning, result } = useSlotMachineRollStore()

    expect(credit.value).toEqual(0)
    expect(isStarted.value).toEqual(false)
    expect(isSpinning.value).toEqual(false)
    expect(isWinning.value).toEqual(false)
    expect(result.value).toEqual([])
  })

  it('should start the game correctly', () => {
    const { credit, isStarted, isSpinning, result, start } = useSlotMachineRollStore()

    start()

    expect(credit.value).toEqual(10)
    expect(isStarted.value).toEqual(true)
    expect(result.value.length).toEqual(3)
    expect(isSpinning.value).toEqual(false)
  })

  it('should end the game correctly', () => {
    const { credit, isStarted, isSpinning, result, end } = useSlotMachineRollStore()

    end()

    expect(credit.value).toEqual(0)
    expect(isStarted.value).toEqual(false)
    expect(result.value.length).toEqual(0)
    expect(isSpinning.value).toEqual(false)
  })

  it('should roll the slot machine correctly', () => {
    const { credit, result, roll } = useSlotMachineRollStore()

    // test rolling the slot machine when credit is less than 1
    credit.value = 0
    roll()
    expect(result.value).toEqual([])

    // test rolling the slot machine when credit is between 1 and 40
    credit.value = 30
    roll()
    expect(result.value.length).toEqual(3)

    // test rolling the slot machine when credit is between 40 and 60
    credit.value = 50
    roll()
    if (result.value.every(symbol => symbol.name === result.value[0].name))
      expect(credit.value).toBeGreaterThan(50)

    else
      expect(credit.value).toEqual(49)

    // test rolling the slot machine when credit is greater than 60
    credit.value = 70
    roll()
    if (result.value.every(symbol => symbol.name === result.value[0].name))
      expect(credit.value).toBeGreaterThan(70)

    else
      expect(credit.value).toEqual(69)
  })

  it('should cash out the correct amount', () => {
    const { credit, cashOut } = useSlotMachineRollStore()

    credit.value = 20
    const amount = cashOut()
    expect(amount).toEqual(20)
    expect(credit.value).toEqual(0)
  })
})
