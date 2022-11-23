import { useState, useEffect } from 'react'
import './App.css'
import DrawHungman from './DrawHungman'
import HungmanWord from './HungmanWord'
import Keybord from './Keybord'
import Result from './Result'
import words from "./wordsList.json"

function App() {
  const [guseWord, setGuseWord] = useState("")
  const [expectedWord, setExpectedWord] = useState(words[Math.floor(Math.random()*words.length)]||"text")
  const [wrongKeys, setWrongKeys] = useState("")
  const [isWin, setIsWin] = useState(0)
  const [disableButton, setDisableButton] = useState(false)
  
  const lettersColorSet =()=>{
    document.querySelectorAll(".letters").forEach((el)=>{
      el.style.visibility="visible";
      el.style.color=guseWord.includes(el.innerText.toLowerCase())?"green":"red"
    })
  }

  const handleKeydown = (e)=>{
    if(expectedWord.includes(e.key)){
      if(!guseWord.includes(e.key)){
        setGuseWord(guseWord+e.key)
      }
    }else {
      if(!wrongKeys.includes(e.key)){
        setWrongKeys(wrongKeys+e.key)
      }
    }
  }

  useEffect(() => {
    let temp=""
    let tempArr = [Math.floor(Math.random()*expectedWord.length),Math.floor(Math.random()*expectedWord.length)]
    tempArr.forEach((i)=>{
      temp+=expectedWord[i]
    })
    setGuseWord(temp)
    console.log("expectedWord:",expectedWord)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown',handleKeydown)
    return ()=>{
      window.removeEventListener('keydown',handleKeydown)
    }
  })
  
  useEffect(() => {
    if(expectedWord.split('').every(l=>guseWord.includes(l))){
      setDisableButton(true)
      lettersColorSet()
      setIsWin(1)
    }else if(wrongKeys.length>=6){
      setDisableButton(true)
      lettersColorSet()
      document.querySelector('.man').classList.add("hunging")
      setIsWin(-1)
    }else {
      
    }  
  }, [guseWord,wrongKeys])
  
  return (
    <div className="App">
      <Result isWin={isWin} />
      <DrawHungman wrongKeys={wrongKeys} />
      <HungmanWord expectedWord={expectedWord} guseWord={guseWord} />
      <Keybord expectedWord={expectedWord} guseWord={guseWord} setGuseWord={setGuseWord} 
                wrongKeys={wrongKeys} setWrongKeys={setWrongKeys} disableButton={disableButton}
      />
    </div>
  )
}

export default App
