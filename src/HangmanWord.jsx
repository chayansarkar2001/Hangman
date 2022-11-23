import React from 'react'

function HungmanWord({expectedWord,guseWord}) {
  return (
    <div className='hungman-word'>
      {
        expectedWord.split("").map((letter,i)=>{
          return <span key={i} style={{
            borderBottom:"4px solid black",
            padding:"0px 7px 15px 7px",
            margin:"auto 3px"
            }}><span style={{
              textTransform:"uppercase",
              fontWeight:"bold",
              fontSize:"2rem",
              fontFamily:"sans-serif",
              visibility: guseWord.includes(letter)?"visible":"hidden"
            }} className="letters">{letter}</span></span>
        })
      }
    </div>
  )
}
export default HungmanWord