import { useState } from 'react'

import './Calculadora.css'

import Display from '../Display/Display'
import Botao from '../Botao/Botao'

function Calculadora() {

  const [valor, setValor]
  = useState("")

  function adicionarValor(valorNovo){

    const operadores =
    ["+","-","*","/"]

    const ultimoCaractere =
    valor.slice(-1)

    // impede operadores repetidos
    if(
      operadores.includes(valorNovo)
      &&
      operadores.includes(
        ultimoCaractere
      )
    ){
      return
    }

    // impede 00
    if(
      valor === "0"
      &&
      valorNovo === "0"
    ){
      return
    }

    // troca 0 inicial
    if(
      valor === "0"
      &&
      !operadores.includes(valorNovo)
      &&
      valorNovo !== ","
    ){
      setValor(valorNovo)
      return
    }

    setValor(valor + valorNovo)
  }

  function apagarUltimo(){

    setValor(
      valor.slice(0, -1)
    )

  }

  function adicionarParenteses(){

    const abrindo =
    (valor.match(/\(/g) || [])
    .length

    const fechando =
    (valor.match(/\)/g) || [])
    .length

    if(
      abrindo === fechando
    ){

      // adiciona multiplicação automática
      if(
        valor.length > 0 &&
        !["+","-","*","/","("]
        .includes(valor.slice(-1))
      ){

        setValor(valor + "*(")

      }

      else{

        setValor(valor + "(")

      }

    }

    else{

      setValor(valor + ")")

    }

  }

  function calcular(){

    try{

      let conta = valor

      // vírgula
      conta =
      conta.replaceAll(",", ".")

      // 2(3+5)
      conta =
      conta.replace(
        /(\d)\(/g,
        "$1*("
      )

      // )( 
      conta =
      conta.replace(
        /\)\(/g,
        ")*("
      )

      // porcentagem
      
      conta =
      conta.replace(
        /(\d+(?:\.\d+)?)%(\d+(?:\.\d+)?)/g,
        "($1/100)*$2"
      )

      const resultado =
      eval(conta)

      setValor(
        resultado.toLocaleString(
          "pt-BR"
        )
      )

    }

    catch{

      setValor("Erro")

    }

  }

  return (

    <div className='calculadora'>

      <Display valor={valor} />

      <div className='botoes'>

        <Botao
          texto="C"
          clique={() => setValor("")}
        />

        <Botao
          texto="⌫"
          clique={apagarUltimo}
        />

        <Botao
          texto="()"
          clique={adicionarParenteses}
        />

        <Botao
          texto="%"
          clique={() =>
            adicionarValor("%")
          }
        />

        <Botao
          texto="7"
          clique={() =>
            adicionarValor("7")
          }
        />

        <Botao
          texto="8"
          clique={() =>
            adicionarValor("8")
          }
        />

        <Botao
          texto="9"
          clique={() =>
            adicionarValor("9")
          }
        />

        <Botao
          texto="/"
          clique={() =>
            adicionarValor("/")
          }
        />

        <Botao
          texto="4"
          clique={() =>
            adicionarValor("4")
          }
        />

        <Botao
          texto="5"
          clique={() =>
            adicionarValor("5")
          }
        />

        <Botao
          texto="6"
          clique={() =>
            adicionarValor("6")
          }
        />

        <Botao
          texto="X"
          clique={() =>
            adicionarValor("*")
          }
        />

        <Botao
          texto="1"
          clique={() =>
            adicionarValor("1")
          }
        />

        <Botao
          texto="2"
          clique={() =>
            adicionarValor("2")
          }
        />

        <Botao
          texto="3"
          clique={() =>
            adicionarValor("3")
          }
        />

        <Botao
          texto="-"
          clique={() =>
            adicionarValor("-")
          }
        />

        <Botao
          texto="0"
          clique={() =>
            adicionarValor("0")
          }
        />

        <Botao
          texto=","
          clique={() =>
            adicionarValor(",")
          }
        />

        <Botao
          texto="="
          clique={calcular}
        />

        <Botao
          texto="+"
          clique={() =>
            adicionarValor("+")
          }
        />

      </div>

    </div>

  )
}

export default Calculadora