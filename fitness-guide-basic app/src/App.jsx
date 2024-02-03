
import './App.css'
import Slide from './components/Slide'
import Header from './components/Header'

function App({slides}) {
  
  return (
    <>
    <Header></Header>
     <Slide slides = {slides}></Slide>
     
    </>
  )
}

export default App
