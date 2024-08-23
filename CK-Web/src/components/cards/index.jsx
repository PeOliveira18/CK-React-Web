import { useState } from "react";
import styled from "styled-components";
import { DadosCard } from "./dadosCard";

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Card = styled.div`
    margin: 50px 0px 0px 20px;
    border-radius: 16px;
    background-color: ${props => props.cor};
    padding: 16px 34px;
    width: 309px;
    height: 326px;
    
    h1{
        color: white;
    }

    p{
        font-size: 18px;
    }
`



function CardsHome() {
    const [CardHome, setCardHome] = useState(DadosCard)
    
    return (  
        <CardsContainer>
            {CardHome.map((props) => (
                <Card cor = {props.cor}>
                    <h1>{props.numero}</h1>
                    {/* <img src={props.logo}/> */}
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                </Card>
            ))}
        </CardsContainer>
    );
}

export default CardsHome;