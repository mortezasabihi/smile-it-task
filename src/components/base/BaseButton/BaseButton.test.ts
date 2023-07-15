import { shallowMount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('components/base/BaseButton.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(BaseButton)
    expect(wrapper).toBeTruthy()
  })

  it('renders the component with the default color and variant', () => {
    const wrapper = shallowMount(BaseButton)
    const classes = wrapper.classes()
    expect(classes).toContain('bg-blue-500')
    expect(classes).toContain('text-white')
    expect(classes).not.toContain('bg-red-500')
    expect(classes).not.toContain('text-red-500')
    expect(classes).not.toContain('border-red-500')
  })

  it('renders the component with the specified color and variant', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        color: 'secondary',
        variant: 'outlined',
      },
    })
    const classes = wrapper.classes()
    expect(classes).toContain('border-red-500')
    expect(classes).toContain('text-red-500')
    expect(classes).toContain('text-red-500')
    expect(classes).toContain('hover:text-white')
    expect(classes).toContain('hover:bg-red-500')
    expect(classes).not.toContain('bg-blue-500')
    expect(classes).not.toContain('text-blue-500')
    expect(classes).not.toContain('border-blue-500')
  })

  it('renders the component with the correct slot content', () => {
    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: 'My Button',
      },
    })
    const text = wrapper.text()
    expect(text).toBe('My Button')
  })
})
