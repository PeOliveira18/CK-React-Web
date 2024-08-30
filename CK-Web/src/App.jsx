import styled from 'styled-components'
import Header from './components/header'
import SectionTitulo from './components/section-titulo'
import CardsHome from './components/cards'
import Home from './pages/Home/home'


export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: bisque;
    overflow-x: hidden;
    color: black;
`

function App() {

  return (
    <AppContainer>      
        <Home></Home>
    </AppContainer>
  )
}

export default App
