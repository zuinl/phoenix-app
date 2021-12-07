import SongBox from '../SongBox'
import * as S from './styles'

interface SongsContainerProps {
    birds: {
        name: string,
        length: string
    }[]
}

const SongsContainer = (props: SongsContainerProps) => {
    return (
        <S.SongsContainer>
            {props.birds.map(bird => {
                return (
                    <SongBox name={bird.name}
                        length={bird.length} />
                )
            })}
        </S.SongsContainer>
    )
}

export default SongsContainer