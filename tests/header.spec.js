import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderOne from '../home/HeaderOne.vue'

describe('Header', () => {
  it('should title h1', () => {
    const wrapper = mount(HeaderOne)
    const value = wrapper.find('h1').text()
    expect(value).toBe('SUPER HEROES UNIVERSE')
  })
})
