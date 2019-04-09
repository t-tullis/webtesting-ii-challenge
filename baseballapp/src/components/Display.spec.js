import React from 'react'
import { render } from 'react-testing-library'
import Display from './Display'


describe('Testing Display', () => {
    it('Display renders successfully', () => {
        render(<Display />)
    })
})