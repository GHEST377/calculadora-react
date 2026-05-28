import { useState } from 'react'

import './App.css'

import Header from './Components/Header/Header'
import Calculadora from './Components/Calculadora/Calculadora'

import fundoClaro from './assets/fundoclaro.png'
import fundoEscuro from './assets/fundoescuro.png'

function App() {

  const [temaEscuro, setTemaEscuro]
  = useState(false)

  const fundoAtual =
    temaEscuro
      ? fundoEscuro
      : fundoClaro

  return (

    <div
      className='app'
      style={{
        backgroundImage: `url(${fundoAtual})`
      }}
    >

      <Header
        temaEscuro={temaEscuro}
        setTemaEscuro={setTemaEscuro}
      />

      <p className='descricao'> uma calculadora simples,  ainda tem coisa pra colocar... eu acho
      </p>

      <Calculadora />

    </div>

  )
}

export default App