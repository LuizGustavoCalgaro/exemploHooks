import { useState } from 'react'
import './App.css'

function App() {
  var nome = "Luiz"


  const [name, setName] = useState("Valor Inicial")

  function mudarNome(event){
    nome =  event.target.value;
    setName(event.target.value)

  }

  const [ sobrename, setSobrename] = useState("Valor Inicial")

    function mudarSobrenome(event) {
   
      setSobrename(event.target.value)

    }

  return (
    <>
     <p>Informe seu nome</p>
    <input onChange={mudarNome}/>

    <p>{name}</p>

     <p>Informe seu sobrenome</p>
    <input onChange={mudarSobrenome}/>

    <p>{sobrename}</p>
    </>
  )
}

export default App
