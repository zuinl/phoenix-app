import * as S from './styles'
import PhoenixLogo from '../../assets/img/phoenix_app.svg'

const Header = () => {
    return (
        <S.Header>
            <a href="https://www.wattpad.com/story/292650827-fênix" 
                target="_blank"
                rel="noreferrer">
                <img src={PhoenixLogo} alt="Phoenix App" />
            </a>
        </S.Header>
    )
}

export default Header