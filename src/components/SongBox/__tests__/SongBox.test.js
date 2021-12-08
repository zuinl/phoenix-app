import { render, screen } from '@testing-library/react'
import songs from '../../../utils/songs'
import SongBox from '../index'

const song = {
    name: songs[0].name,
    length: songs[0].length,
    title: songs[0].title,
    text: songs[0].text,
    videoYoutubeID: songs[0].videoYoutubeID
}

describe("SongBox", () => {
    test('SongBox should be rendered', () => {
        render(
            <SongBox 
                name={song.name}
                length={song.length}
                title={song.title}
                text={song.text}
                videoYoutubeID={song.videoYoutubeID}
            />
        )

        const songBoxElement = screen.getByTestId(/song-box/i)
        
        expect(songBoxElement).toBeInTheDocument()
    })
    test('song name should be equal to passed as prop', () => {
        render(
            <SongBox 
                name={song.name}
                length={song.length}
                title={song.title}
                text={song.text}
                videoYoutubeID={song.videoYoutubeID}
            />
        )

        const nameElement = screen.queryAllByRole("heading")
        
        expect(nameElement[0].textContent).toBe(song.name)
    })
    test('song length should be equal to passed as prop', () => {
        render(
            <SongBox 
                name={song.name}
                length={song.length}
                title={song.title}
                text={song.text}
                videoYoutubeID={song.videoYoutubeID}
            />
        )

        const lengthElement = screen.getByTestId(/song-length/i)
        
        expect(lengthElement.textContent).toBe(song.length)
    })
})