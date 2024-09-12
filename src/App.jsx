import { useState } from "react";
import Input from "./componentes/Input";


export default function App(){
  const [passoword, setPassoword] = useState ("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize,setPassowordsize] = useState(10)
  const [showInput, setShowInput] = useState(false)


  function generate(){
     const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    //  const length = 10 //->  seve para devinir o tamanho da senha que eu quero
     let newPassword = ""
     for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
     }
     setPassoword(newPassword)
     setCopyText("Copiar")
  }

  function copyClipboard() {
    navigator.clipboard.writeText(passoword)
    setCopyText("Copiado")
  }

  return(
    <div className="app">
        <h1>gerador de senhas</h1>
        <div>
            <label htmlFor="showInput">Customizar tamanho:</label>
            <input 
              type="checkbox"
              id="showInput"
              value={showInput}
              onClick={()=>setShowInput(currentState => !currentState)}
             />
        </div>
        {
            showInput ? (
            <div>
              <label htmlFor="passwordSize">Tamanho:</label>
              <Input 
                passowordasswordSize={passwordSize}
                setPassowordsize={setPassowordsize}
              />
            </div>):null
        }
        
        
        <button onClick={generate}>Gerar senha de { showInput ? passwordSize : 8}</button>
        <button onClick={copyClipboard} >{copyText}</button>
        <div>{passoword}</div>
    </div>

  )


}