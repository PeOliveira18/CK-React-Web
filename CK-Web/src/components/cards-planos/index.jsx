import styled from "styled-components";
import { BotaoPlanos } from "../btn-planos";
import { BotaoCadastro } from "../botao-cadastro";
import btnDetalhes from '../../images/detalhes.png'
import { ParteCima } from "../parte-cima-card";
import { ParteBaixo } from "../parte-baixo-card";


const CardContainer = styled.div`
    margin-top: 30px;    
    margin-left: 30px;    
    margin-bottom: 30px;    

    .divisor{
        height: 1px;
        width: 270px;
        background-color: #F1EFEF;
        
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
                                                <p>{content.botao1}<strong> R$15</strong></p>
                                                <img src={btnDetalhes} alt="Imagem Descritiva Detalhes" />
                                            </BotaoPlanos>
                                    )}
                                    {content.botao2 && card === 1 && (
                                        <div>
                                            <BotaoPlanos>
                                                {content.botao1}<strong> R$40</strong>
                                                <img src={btnDetalhes} alt="Imagem Descritiva Detalhes" />
                                            </BotaoPlanos>
                                            <p>{content.descricao2}</p>
                                            <BotaoPlanos>
                                                {content.botao1} <strong> R$20</strong>
                                                <img src={btnDetalhes} alt="Imagem Descritiva Detalhes" />
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