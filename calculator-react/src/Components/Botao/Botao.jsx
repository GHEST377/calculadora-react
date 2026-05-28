import './Botao.css'

function Botao({
  texto,
  clique
}) {

  return (

    <button
      className='botao'
      onClick={clique}
    >

      {texto}

    </button>

  )
}

export default Botao