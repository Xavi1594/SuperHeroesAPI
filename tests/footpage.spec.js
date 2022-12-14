import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import FootPage from '../src/components/home/FootPage.vue'

describe('FootPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FootPage)
 })
  it('should title h2', () => {
    
    const value = wrapper.find('h2').text()
    expect(value).toBe('SUPER HEROES UNIVERSE')
  })
  }

  
 


)

  


