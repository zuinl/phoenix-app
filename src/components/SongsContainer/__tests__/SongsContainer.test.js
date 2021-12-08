import { render, screen } from '@testing-library/react'
import SongsContainer from '../index'

describe("SongsContainer", () => {
    test('SongsContainer should be rendered', () => {
        render(
            <SongsContainer />
        )

        const songsContainerElement = screen.getByTestId(/songs-container/i)
        
        expect(songsContainerElement).toBeInTheDocument()
    })
})