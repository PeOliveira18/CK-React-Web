import styled from "styled-components";
import { Botao } from "../btn";
import imagem from '../../images/foto-home.png'
export const TituloContainer = styled.div`
    display: flex;
    justify-content: center;    
`

export const TextosContainer = styled.div`
    display: column;
    width: 550px;
    text-align: left;
    margin-left: 30px;

    h1{
        font-size: 60px;
    }
    p{
        font-size: 18px;
    }
`

export const ImagemContainer = styled.div`
    margin-top: 20px;
    

    img{
        width = 651px;
        height = 469px;
    }
`


function SectionTitulo() {
    return ( 
        <TituloContainer>
            <TextosContainer>
                <h1>Crie seus videos online</h1>
                <p>Transforme suas ideias em filmes memoraveis: onde a criatividade encontra a simplicidade.</p>
                <Botao>Comecar agora</Botao>
            </TextosContainer>
            <ImagemContainer>
                <img src={imagem} alt="Foto do menu home" />
            </ImagemContainer>
        </TituloContainer>
    );
}

export default SectionTitulo;