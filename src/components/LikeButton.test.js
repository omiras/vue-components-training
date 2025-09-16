import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LikeButton from './LikeButton.vue'

describe('LikeButton.vue', () => {
    it('initially the value of the button should be 0', () => {
        const wrapper = mount(LikeButton)


        const button = wrapper.get('button')

        // compueba que el valor inicial es 0
        expect(button.text()).toContain('0') // lo que ve el usuario
    })

    it('If clicked value shold be 1', async () => {
        const wrapper = mount(LikeButton)

        const button = wrapper.get('button')

        await button.trigger('click')

        expect(button.text()).toContain('1') // lo que ve el usuario


    })
})