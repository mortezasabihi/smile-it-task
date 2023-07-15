import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

test('mount component', () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Morteza',
    },
  })

  expect(wrapper.text()).toContain('Morteza')
})
