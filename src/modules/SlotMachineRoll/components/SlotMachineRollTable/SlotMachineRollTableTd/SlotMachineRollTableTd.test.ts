import { mount } from '@vue/test-utils'
import SlotMachineRollTableTd from './SlotMachineRollTableTd.vue'
import { SYMBOLS } from '@/modules/SlotMachineRoll/store/useSlotMachineRollStore'
import type { VueComponentWrapper } from '@/types'

describe('modules/SlotMachineRoll/components/SlotMachineRollTable/SlotMachineRollTableTd/SlotMachineRollTableTd.vue', () => {
  let wrapper: VueComponentWrapper<typeof SlotMachineRollTableTd>

  beforeEach(() => {
    wrapper = mount(SlotMachineRollTableTd, {
      props: {
        symbol: SYMBOLS[0],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the component', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders the correct SVG for each symbol name', () => {
    SYMBOLS.forEach((symbol) => {
      const wr = mount(SlotMachineRollTableTd, {
        props: {
          symbol,
        },
      })
      expect(wr.find('[data-test="symbol"]').classes(`bg-[url("@/assets/fruits/${symbol.name}.svg")]`)).toBeTruthy()

      wr.unmount()
    })
  })

  it('renders a spinner when the isSpinning prop is true', () => {
    expect(wrapper.find('[data-test="spinner"]').exists()).toBeFalsy()

    const wr = mount(SlotMachineRollTableTd, {
      props: {
        symbol: SYMBOLS[0],
        isSpinning: true,
      },
    })

    expect(wr.find('[data-test="spinner"]').exists()).toBeTruthy()

    wr.unmount()
  })

  it('shows the symbol image when isSpinning prop is false', () => {
    expect(wrapper.find('[data-test="symbol"]').classes(`bg-[url("@/assets/fruits/${SYMBOLS[0].name}.svg")]`)).toBeTruthy()
  })

  it('sets the default value of isSpinning prop to false', () => {
    expect(wrapper.vm.$props.isSpinning).toBeFalsy()
  })
})
