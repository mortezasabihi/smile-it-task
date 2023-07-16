import { type VueWrapper, mount } from '@vue/test-utils'
import SlotMachineRoll from './SlotMachineRoll.vue'
import SlotMachineRollHeader from './components/SlotMachineRollHeader/SlotMachineRollHeader.vue'
import SlotMachineRollTable from './components/SlotMachineRollTable/SlotMachineRollTable.vue'

describe('modules/SlotMachineRoll.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof SlotMachineRoll>>

  beforeEach(() => {
    wrapper = mount(SlotMachineRoll)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the component', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders the component with the SlotMachineRollHeader component', () => {
    const component = wrapper.findComponent(SlotMachineRollHeader)
    expect(component.exists()).toBeTruthy()
  })

  it('renders the component with the SlotMachineRollTable component', () => {
    const component = wrapper.findComponent(SlotMachineRollTable)
    expect(component.exists()).toBeTruthy()
  })
})
