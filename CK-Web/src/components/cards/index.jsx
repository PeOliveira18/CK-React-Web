import { useState } from "react";
import styled from "styled-components";
import { DadosCard } from "./dadosCard";

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Card = styled.div`
    margin: 50px 20px 0px 20px;
    border-radius: 16px;
    background-color: ${props => props.cor};
    padding: 16px 34px;
    width: 280px;
    height: 326px;
    
    
    h1{
        color: white;
    }

    div{
        display: flex;
        justify-content: space-between
    }

    img{
        width: 32px;
        height: 32px;
    }

    p{
        font-size: 18px;
    }
`



function CardsHome({conteudo}) {
    
    return (  
        <CardsContainer>
            {conteudo.map(props => (
                <Card cor = {props.cor}>
                    <div>
                        <h1>{props.numero}</h1>
                        <img src={props.logo}/>
                    </div>
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                </Card>
            ))}
        </CardsContainer>
    );
}

export default CardsHome;