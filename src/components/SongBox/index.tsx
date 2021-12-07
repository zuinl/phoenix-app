import * as S from './styles'

interface SongBoxProps {
    name: string,
    length: string
}

const SongBox = (props: SongBoxProps) => {
    return (
        <S.SongBox>
            <S.BirdName>
                {props.name}
            </S.BirdName>
            <S.BirdLength>
                {props.length}
            </S.BirdLength>
        </S.SongBox>
    )
}

export default SongBox