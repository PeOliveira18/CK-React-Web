import styled from "styled-components";

export const BotaoCadastro = styled.button`
    width: 225px;
    height: 34px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: ${props => props.bgColor}; 
    color: ${props => props.color};
`