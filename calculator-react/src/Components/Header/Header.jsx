import './Header.css'

import tituloClaro from '../../assets/tituloclaro.png'
import tituloEscuro from '../../assets/tituloescuro.png'

function Header({
  temaEscuro,
  setTemaEscuro
}) {

  const tituloAtual =
    temaEscuro
      ? tituloEscuro
      : tituloClaro

  return (

    <div
      className='titulo'
      style={{
        backgroundImage:
          `url(${tituloAtual})`
      }}
    >



      {/* <p>
        uma calculadora simples,
        ainda tem coisa pra colocar...
      </p> */}

      <button
        className='temaBotao'
        onClick={() =>
          setTemaEscuro(!temaEscuro)
        }
      >

        {temaEscuro ? "☀️ Claro" : "🌙 Escuro"}

      </button>

    </div>

  )
}

export default Header