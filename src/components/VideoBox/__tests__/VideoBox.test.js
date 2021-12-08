import { render, screen } from '@testing-library/react'
import VideoBox from '../index'

describe("VideoBox", () => {
    test('VideoBox should be rendered', () => {
        render(
            <VideoBox />
        )

        const videoBoxElement = screen.getByTestId(/video-box/i)
        
        expect(videoBoxElement).toBeInTheDocument()
    })
})