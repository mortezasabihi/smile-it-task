import { mount } from '@vue/test-utils'
import SlotMachineRollHeader from './SlotMachineRollHeader.vue'
import type { VueComponentWrapper } from '@/types'

describe('modules/SlotMachineRoll/components/SlotMachineRollHeader.vue', () => {
  let wrapper: VueComponentWrapper<typeof SlotMachineRollHeader>

  beforeEach(() => {
    wrapper = mount(SlotMachineRollHeader, {
      global: {
        mocks: {
          isStarted: false,
          isSpinning: false,
          isWinning: false,
          credit: 10,
        },
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the component', () => {
    expect(wrapper).toBeTruthy()
  })

  it('displays the title', () => {
    expect(wrapper.find('h1').text()).toBe('Slot Machine Roll')
  })

  it('displays the credit when the game is started', async () => {
    expect(wrapper.vm.isStarted).toBeFalsy()
    await wrapper.get('[data-test="roll-btn"]').trigger('click')
    expect(wrapper.find('span.font-bold').text()).toContain('Credit:')
    expect(wrapper.find('[data-test="credit-value"]').text()).toEqual('10')
    expect(wrapper.vm.isStarted).toBeTruthy()
  })

  it('calls the start function when the Roll button is clicked', async () => {
    expect(wrapper.vm.isStarted).toBeFalsy()
    await wrapper.get('[data-test="roll-btn"]').trigger('click')
    expect(wrapper.vm.isStarted).toBeTruthy()
  })

  it('shows the Roll Again button when started', async () => {
    const selector = '[data-test="roll-again-btn"]'
    expect(wrapper.find(selector).exists()).toBeFalsy()
    await wrapper.get('[data-test="roll-btn"]').trigger('click')
    expect(wrapper.find(selector).exists()).toBeTruthy()
  })

  it('shows the Cash Out button when started and credit is greater than 0', async () => {
    const selector = '[data-test="cash-out-btn"]'
    expect(wrapper.find(selector).exists()).toBeFalsy()
    await wrapper.get('[data-test="roll-btn"]').trigger('click')
    expect(wrapper.find(selector).exists()).toBeTruthy()
  })

  it('shows an alert when there there are no credits left', async () => {
    const wr = mount(SlotMachineRollHeader, {
      global: {
        mocks: {
          credit: 0,
          isStarted: true,
        },
      },
    })

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => { })
    await wr.find('[data-test="roll-again-btn"]').trigger('click')
    expect(alertSpy).toHaveBeenCalledWith('You have no credits left!')

    wr.unmount()
  })

  it('shows an alert when cashing out', async () => {
    const wr: VueComponentWrapper<typeof SlotMachineRollHeader> = mount(SlotMachineRollHeader, {
      global: {
        mocks: {
          credit: 40,
          isStarted: true,
        },
      },
    })
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => { })
    await wr.find('[data-test="cash-out-btn"]').trigger('click')
    expect(wr.vm.credit).toBe(0)
    expect(alertSpy).toHaveBeenCalledWith('You cashed out 40 credits.')

    wr.unmount()
  })
})
