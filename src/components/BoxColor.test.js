// ColorBox.test.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ColorBox from './BoxColor.vue' // Ajusta la ruta a tu componente

describe('ColorBox.vue', () => {
  it('renderiza correctamente con props r, g, b', () => {
    const wrapper = mount(ColorBox, {
      props: { r: 255, g: 0, b: 0 } // Rojo puro
    })

    // Comprueba el texto RGB
    expect(wrapper.text()).toContain('rgb(255, 0, 0)')

    // Comprueba el texto Hex
    expect(wrapper.text()).toContain('#ff0000')

    // Comprueba el estilo inline
    const div = wrapper.find('div')
    expect(div.element.style.backgroundColor).toBe('rgb(255, 0, 0)')
  })
})
