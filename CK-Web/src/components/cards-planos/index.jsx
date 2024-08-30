import styled from "styled-components";
import { BotaoPlanos } from "../btn-planos";
import { BotaoCadastro } from "../botao-cadastro";


const CardContainer = styled.div`
    margin-top: 30px;    
    margin-left: 30px;    

    .divisor{
        height: 1px;
        width: 270px;
        background-color: #F1EFEF;
        
    }
`

const ParteCima = styled.div`
    width: 240px;
    height: 60px;
    background-color: ${dados => dados.corCima || 'white'};
    color: black;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    padding: 15px;
    text-align: center;
` 

const ParteBaixo = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 315px;
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



function CardsPlano({dados}) {

    const coresCadastro = [
        {
            bgColor: '#6975E8',
            color: '#FFFFFF',
            texto: 'Cadastrar'
        },
        {
            bgColor: '#FFFFFF',
            color: '#000000',
            texto: 'Cadastrar'
        },
        {
            bgColor: '#FFFFFF',
            color: '#000000',
            texto: 'Entre em contato'
        },
    ]
    
    return ( 

        <>
                {
                    dados.map((content, card) => (
                        <CardContainer key={card}>
                            <ParteCima corCima = {content.corFundo}>
                                <h3>{content.titulo}</h3>
                            </ParteCima>
                            <div className="divisor"></div>
                            <ParteBaixo>
                                <div className="descricao">
                                    <p>{content.descricao}</p>
                                    {content.botao1 && card === 0 && (
                                            <BotaoPlanos>
                                                <p>{content.botao1}</p>
                                            </BotaoPlanos>
                                    )}
                                    {content.botao2 && card === 1 && (
                                        <div>
                                            <BotaoPlanos>
                                                <p>{content.botao1}</p>
                                            </BotaoPlanos>
                                            <p>{content.descricao2}</p>
                                            <BotaoPlanos>
                                                <p>{content.botao1}</p>
                                            </BotaoPlanos>
                                        </div>
                                    )}
                                </div>  
                                <div className="imagem-card">
                                    {content.imagem && <img src={content.imagem} alt="Descricao Card"/>}
                                </div>          
                                <div className="btn-cadastro">
                                    <BotaoCadastro
                                        bgColor = {coresCadastro[card].bgColor}
                                        color = {coresCadastro[card].color}
                                    >
                                        {coresCadastro[card].texto}
                                    </BotaoCadastro>
                                </div>
                            </ParteBaixo>
                        </CardContainer>
                    ))
                }
        </>
    );
}

export default CardsPlano;