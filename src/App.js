import React, { useState } from 'react'
import "./App.css"

export default function App() {
  const [resultado, setResultado] = useState("");

  const handleClick = (e)=>{
    setResultado(resultado.concat(e.target.name))
  }


  const clear = ()=>{
    setResultado("")
  }

  const deletee = ()=>{
    setResultado(resultado.slice(0,-1))
  }

  const calcular = ()=>{

    try {
      // eslint-disable-next-line no-eval
      setResultado(eval(resultado).toString())
    } catch (error) {
      setResultado("Error!")
      setTimeout(()=>{
        setResultado("")
      },500)
    }

  }


  return (
    <div className='container'>
      <form>
        <input type={"text"} value={resultado} />
      </form>
      <div className='keys'>
          <button className='difColor' onClick={clear} id="clear" >Clear</button>
          <button className='difColor' onClick={deletee} id="delete" >C</button>
          <button className='difColor' name="/"onClick={e=>handleClick(e)}>&divide;</button>
          <button name="7"onClick={e=>handleClick(e)}>7</button>
          <button name="8"onClick={e=>handleClick(e)}>8</button>
          <button name="9"onClick={e=>handleClick(e)}>9</button>
          <button className='difColor' name="*"onClick={e=>handleClick(e)}>&times;</button>
          <button name="4"onClick={e=>handleClick(e)}>4</button>
          <button name="5"onClick={e=>handleClick(e)}>5</button>
          <button name="6"onClick={e=>handleClick(e)}>6</button>
          <button className='difColor' name="-"onClick={e=>handleClick(e)}>&ndash;</button>
          <button name="1"onClick={e=>handleClick(e)}>1</button>
          <button name="2"onClick={e=>handleClick(e)}>2</button>
          <button name="3"onClick={e=>handleClick(e)}>3</button>
          <button className='difColor' name="+"onClick={e=>handleClick(e)}>+</button>
          <button name="0"onClick={e=>handleClick(e)}>0</button>
          <button name="."onClick={e=>handleClick(e)}>.</button>
          <button className='difColor' id="result" onClick={calcular}>=</button>
      </div>
    </div>
  )
}

