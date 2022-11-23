import React from 'react'

function Keybord({expectedWord, guseWord, setGuseWord, wrongKeys, setWrongKeys, disableButton}) {
  const letters="QWERTYUIOPASDFGHJKLZXCVBNM"

  const handleKeysClick = (e)=>{
    let key = e.target.innerText.toLowerCase()
    if(expectedWord.includes(key)){
      if(!guseWord.includes(key)){
        setGuseWord(guseWord+key)
      }
    }else {
      if(!wrongKeys.includes(key)){
        setWrongKeys(wrongKeys+key)
      }
    }
  }

  return (
    <div className='keybord'>
      {
        letters.split("").map((l,i)=>{
          return <div key={i} className={`keys ${guseWord.includes(l.toLowerCase())?"right":wrongKeys.includes(l.toLowerCase())?"wrong":""}`} onClick={disableButton?undefined:handleKeysClick}>{l}</div>
        })
      }
    </div>
  )
}

export default Keybord