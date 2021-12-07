import { useContext } from 'react'
import { SongContext } from '../../contexts/SongContext'
import * as S from './styles'

interface SongBoxProps {
    name: string,
    length: string,
    title: string,
    text: string,
    videoYoutubeID: string
}

const SongBox = (props: SongBoxProps) => {
    const {
        currentSong,
        setCurrentSong
    } = useContext(SongContext)

    const onSongClick = () => {
        setCurrentSong({
            name: props.name,
            length: props.length,
            title: props.title,
            text: props.text,
            videoYoutubeID: props.videoYoutubeID
        })
    }

    return (
        <S.SongBox active={currentSong.name === props.name}
            onClick={onSongClick}>
            <S.TextName>
                {props.name}
            </S.TextName>
            <S.TextLength>
                {props.length}
            </S.TextLength>
        </S.SongBox>
    )
}

export default SongBox