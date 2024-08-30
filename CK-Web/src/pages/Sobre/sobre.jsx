import styled from "styled-components";
import { AppContainer } from "../../App";
import Header from "../../components/header";
import { Botao } from "../../components/btn";
import { TituloContainer } from "../../components/section-titulo";
import { TextosContainer } from "../../components/section-titulo";
import CardsPlano from "../../components/cards-planos";
import foto1 from '../../images/sobre1.jpeg'
import foto2 from '../../images/sobre2.jpeg'
import logo from '../../images/logo-mobile.png'

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

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 20px;
`

function PaginaSobre(props) {

    const conteudoCard = [
        {
            titulo: 'Individual',
            corFundo: '#6975E8',
            descricao: '1 Usuario',
            botao1: '10 Videos R$15'
        },
        {
            titulo: 'Profissional - Times',
            corFundo: '#FFFFFF',
            descricao: '1-10 Usuarios',
            descricao2: '+10 Usuarios',
            botao1: 'Videos Ilimitados R$40',
            botao2: 'Videos Ilimitados R$20'
        },
        {
            titulo: 'Corporativo',
            corFundo: '#FFFFFF',
            imagem: logo    
        },
    ]    

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
            <CardContainer>
                <CardsPlano dados = {conteudoCard}/>
            </CardContainer>
        </AppContainer>
    );
}

export default PaginaSobre;