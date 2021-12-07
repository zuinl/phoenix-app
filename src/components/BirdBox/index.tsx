import * as S from './styles'

interface BirdBoxProps {
    name: string,
    length: string
}

const BirdBox = (props: BirdBoxProps) => {
    return (
        <S.BirdBox>
            <S.BirdName>
                {props.name}
            </S.BirdName>
            <S.BirdLength>
                {props.length}
            </S.BirdLength>
        </S.BirdBox>
    )
}

export default BirdBox