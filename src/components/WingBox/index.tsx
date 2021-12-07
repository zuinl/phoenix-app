import * as S from './styles'

const WingBox = () => {
    return (
        <S.WingBox>
            <iframe
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/NiISrhCsTfA?start=30" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
            />
        </S.WingBox>
    )
}

export default WingBox