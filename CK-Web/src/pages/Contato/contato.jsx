import { AppContainer } from "../Home/App";
import Header from "../../components/header";
import styled from "styled-components";
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import discord from '../../images/discord.svg'

const DuvidasContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 20px;

    .divisor{
    width: 2px;
    height: 450px;
    margin-top: 50px;
    background-color: grey;
    }

`

const DuvidasTexto = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 20%;
    margin-top: -60px;

    img{
        width: 50px;
        height: 50px;
    }

`

const Imagens = styled.div`
    margin-top: 10px;

    a{
        margin-right: 30px;
    }
` 

const Dados = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    .formDados{
        display: flex;
        margin-top: 20px;
        align-items: center;
    }

    label{
        width: 60px;
    }
        
    textarea, input{
        background-color: white;
        border: none;
        border-radius: 10px;
        width: 200px;
        padding: 5px;
        color: black;
        resize: none;
    }
    
    .inputMaior{
        margin-left: 0px;
        margin-top: 5px;
        width: 507px;
        height: 229px;
    }

    .enviar{
        display:flex;
        justify-content: right;
        margin-top: 10px;
    }
    
    .inputSubmit{
        width: 255px;
        height: 34px;
        background-color: #6975E8;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
    }
    
    .inputSubmit:hover{
        background-color: rgb(105,117,232, 80%);
    }
`


function PaginaContato() {
    return ( 
        <AppContainer>
            <Header/>
            <DuvidasContainer>
                <DuvidasTexto>
                    <h1>Duvidas e suporte, entre em contato:</h1>
                    <Imagens>
                        <a href="https://www.instagram.com/p.ooliveira05/" target="_blank"><img src={twitter} alt="Logo Twitter"/></a>
                        <a href="https://x.com/pe_oliveira6" target="_blank"><img src={instagram} alt="Logo Instagram"/></a>
                        <a href="https://discord.com" target="_blank"><img src={discord} alt="Logo Discord"/></a>
                    </Imagens>
                </DuvidasTexto>
                <div className="divisor"></div>
                <Dados>
                    <form>
                        <div className="formDados">
                            <label htmlFor="name">Nome: </label>
                            <input type="text" />
                        </div>
                        <div className="formDados">
                            <label htmlFor="email">E-mail: </label>
                            <input type="email" />
                        </div>
                        <div className="formDados">
                            <label htmlFor="message">Mensagem: </label>
                        </div>
                        <textarea className="inputMaior"/>
                    <div className="enviar">
                        <input type="submit" className="inputSubmit"/>
                    </div>
                    </form>
                    
                </Dados>
            </DuvidasContainer>
        </AppContainer>
    );
}

export default PaginaContato;