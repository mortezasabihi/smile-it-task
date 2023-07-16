import { mount } from '@vue/test-utils'
import { SYMBOLS } from '../../store/useSlotMachineRollStore'
import SlotMachineRollTable from './SlotMachineRollTable.vue'
import SlotMachineRollTableTd from './SlotMachineRollTableTd/SlotMachineRollTableTd.vue'
import type { VueComponentWrapper } from '@/types'

describe('modules/SlotMachineRoll/components/SlotMachineRollTable/SlotMachineRollTable.vue', () => {
  let wrapper: VueComponentWrapper<typeof SlotMachineRollTable>

  beforeEach(() => {
    wrapper = mount(SlotMachineRollTable)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the component', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shows the "Press The Roll Button" message when not started', () => {
    expect(wrapper.text()).toContain('Press the "Roll" Button')
  })

  it('renders the table when started', () => {
    const wr = mount(SlotMachineRollTable, {
      global: {
        mocks: {
          isStarted: true,
          result: SYMBOLS.slice(-3),
        },
      },
    })

    expect(wr.find('table').exists()).toBe(true)
    expect(wr.findAll('td').length).toBe(3)

    wr.unmount()
  })

  it('renders the component with the SlotMachineRollTableTd component when started', () => {
    const wr = mount(SlotMachineRollTable, {
      global: {
        mocks: {
          isStarted: true,
          result: SYMBOLS.slice(-3),
        },
      },
    })
    const component = wr.findComponent(SlotMachineRollTableTd)
    expect(component.exists()).toBeTruthy()

    wr.unmount()
  })
})
