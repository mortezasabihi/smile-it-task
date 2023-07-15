import { mount } from '@vue/test-utils'
import TheDefaultLayout from './TheDefaultLayout.vue'

function mountComponent() {
  return mount(TheDefaultLayout, {
    slots: {
      default: '<p>Default Slot Content</p>',
    },
  })
}

describe('layouts/TheDefaultLayout', () => {
  it('renders the component', () => {
    const wrapper = mountComponent()
    expect(wrapper).toBeTruthy()
  })

  it('renders the component with the default slot', () => {
    const wrapper = mountComponent()
    const text = wrapper.find('p').text()
    expect(text).toBe('Default Slot Content')
  })
})
