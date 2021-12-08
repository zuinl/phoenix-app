import React, { useContext } from 'react'
import { SongContext } from '../../contexts/SongContext'
import * as S from './styles'
import Youtube from 'react-youtube'

const VideoBox = () => {
    const {
        currentSong,
        nextSong
    } = useContext(SongContext)

    return (
        <S.VideoBox data-testid="video-box">
            <Youtube 
                videoId={currentSong.videoYoutubeID}
                opts={{
                    width: "500",
                    height: "315",
                    playerVars: {
                        autoplay: 1
                    }
                }}
                onEnd={nextSong}
            />
        </S.VideoBox>
    )
}

export default VideoBox