import SongBox from '../SongBox'
import * as S from './styles'
import { SongContext } from '../../contexts/SongContext'
import { useContext } from 'react'

const SongsContainer = () => {
    const {
        songs
    } = useContext(SongContext)

    return (
        <S.SongsContainer data-testid="songs-container">
            {songs.map(song => {
                return (
                    <SongBox  key={song.name}
                        name={song.name}
                        length={song.length}
                        title={song.title}
                        text={song.text}
                        videoYoutubeID={song.videoYoutubeID} />
                )
            })}
        </S.SongsContainer>
    )
}

export default SongsContainer