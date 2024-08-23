import styled from "styled-components"
import {Link} from 'react-router-dom'


const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
`
const Opcao = styled.li`
    cursor: pointer;
    list-style: none;
    style: black;
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    gap: 100px;

    a{
        color: black;
        font-size: 22px;
        font-weight: 400;
    }

    a:hover{
        text-decoration: underline;
    }
`

function Header() {
    return ( 
        <Opcoes>
            <Opcao>
                <Link to= '/'>Home</Link>
                <Link to= '/sobre'>Sobre</Link>
                <Link to = '/contato'>Contato</Link>
            </Opcao>
        </Opcoes>
    );
}

export default Header;