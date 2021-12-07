import birds from '../../utils/birds'
import BirdBox from '../BirdBox'
import * as S from './styles'

interface BirdContainerProps {
    birds: {
        name: string,
        length: string
    }[]
}

const BirdContainer = (props: BirdContainerProps) => {
    return (
        <S.BirdContainer>
            {props.birds.map(bird => {
                return (
                    <BirdBox name={bird.name}
                        length={bird.length} />
                )
            })}
        </S.BirdContainer>
    )
}

export default BirdContainer