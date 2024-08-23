import styled from "styled-components";
import { AppContainer } from "../../App";
import Header from "../../components/header";
import { Botao } from "../../components/btn";
import { TituloContainer } from "../../components/section-titulo";
import { TextosContainer } from "../../components/section-titulo";
import foto1 from '../../images/sobre1.jpeg'
import foto2 from '../../images/sobre2.jpeg'

const DuplaImagem = styled.div`
    display:flex;
    justify-content: end;
    margin-left: 30px;

    img{
        width: 216px; 
        height: 469px;
        margin-top: 20px;
        margin-left: 60px;
        margin-right: 60px;
    }
`

function PaginaSobre() {
    return ( 
        <AppContainer>
            <Header/>
            <TituloContainer>
                <TextosContainer max = '70%'>
                    <h1>Bem vindo à revolucao dos videos</h1>
                    <p>Somos uma startup com o objetivo de facilitar a producao de conteudo em larga escala com qualidade profissional, capaz de atingir uma audiencia de milhoes de seguidores</p>
                    <Botao>Baixe o app</Botao>
                </TextosContainer>
                <DuplaImagem>
                    <img src={foto1} alt="Foto descritiva" width = '216px' height = '469px'/>
                    <img src={foto2} alt="Foto descritiva" width = '216px' height = '469px'/>
                </DuplaImagem>
            </TituloContainer>        
        </AppContainer>
    );
}

export default PaginaSobre;