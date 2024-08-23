import styled from "styled-components";

export const Botao = styled.button`
    width: 258px;
    height: 50px;
    border-radius: 24px 56px;
    background-color: black;
    border: none;
    padding: 10px 35px;
    text-align: center;
    cursor: pointer;
    type: submit;
    outline: none;

    &:hover{
        background-color: rgb(0, 0, 0, 80%);
    }

    &:active{
        background-color: rgb(0, 0, 0, 60%);
    }

    &:focus{
        outline: none;
    }
`


