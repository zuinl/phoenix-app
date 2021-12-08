import { useContext } from 'react'
import { SongContext } from '../../contexts/SongContext'
import * as S from './styles'

const TextBox = () => {
    const {
        currentSong
    } = useContext(SongContext)

    return (
        <S.TextBox>
            <S.TextTitle>
                {currentSong.title}
            </S.TextTitle>

            <S.Text dangerouslySetInnerHTML={{ __html: currentSong.text }} />
        </S.TextBox>
    )
}

export default TextBox