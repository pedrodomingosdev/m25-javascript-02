import Menu from './assets/menu.svg';
import LogoSenai from './assets/logo-senai.png';
import Pesquisar from './assets/search.svg';
import Login from './assets/login.svg';
import './styles.css';

export default function Header() {
    return (
        <div className='Header'>
            <img src={Menu} alt="Botão para o Menu" />
            <img src={LogoSenai} alt="Logotipo do Senai" />
            <img src={Login} alt="Botão para a Login" />
            <img src={Pesquisar} alt="Botão para a Pesquisa" />
        </div>
    );
}