import styled from "styled-components";

export const ParteBaixo = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 330px;
    background-color: white;

    .descricao{
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    padding-left: 20px;
    flex-grow: 1
    }

    .descricao p{
        color: black;
    }

    .imagem-card{
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        flex-grow: 1;
    }

    .btn-cadastro{
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
    }
    
`