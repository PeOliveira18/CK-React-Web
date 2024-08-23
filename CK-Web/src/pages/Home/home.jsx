import styled from 'styled-components'
import Header from '../../components/header'
import SectionTitulo from '../../components/section-titulo'
import CardsHome from '../../components/cards'
import { AppContainer } from '../../App'




function Home() {

    return (
    <AppContainer>      
        <Header></Header>
        <SectionTitulo></SectionTitulo>
        <CardsHome></CardsHome>
    </AppContainer>
    )
}

export default Home
