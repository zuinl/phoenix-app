import * as S from './styles'
import PhoenixLogo from '../../assets/img/phoenix_app.svg'
import externalLink from '../../utils/externalLink'

const Header = () => {
    return (
        <S.Header>
            <a href={externalLink} 
                target="_blank"
                rel="noreferrer">
                <img src={PhoenixLogo} alt="Phoenix App" />
            </a>
        </S.Header>
    )
}

export default Header