import { render, screen } from '@testing-library/react'
import TextBox from '../index'

describe("TextBox", () => {
    test('TextBox should be rendered', () => {
        render(
            <TextBox />
        )

        const textBoxElement = screen.getByTestId(/text-box/i)
        
        expect(textBoxElement).toBeInTheDocument()
    })
})