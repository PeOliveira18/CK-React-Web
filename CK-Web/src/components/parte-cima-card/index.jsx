import styled from "styled-components";

export const  ParteCima = styled.div`
width: 240px;
height: 72px;
background-color: ${dados => dados.corCima || 'white'};
color: black;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
padding: 15px;
text-align: center;
` 