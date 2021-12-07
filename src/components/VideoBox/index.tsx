import { useContext } from 'react'
import { SongContext } from '../../contexts/SongContext'
import * as S from './styles'

const VideoBox = () => {
    const {
        currentSong
    } = useContext(SongContext)

    return (
        <S.VideoBox>
            <iframe
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${currentSong.videoYoutubeID}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
            />
        </S.VideoBox>
    )
}

export default VideoBox