import React from 'react'

const Result = ({isWin}) => {
    if(isWin===0){
        return <span style={{color:"blue"}} className='result'>Can You guse the word?</span>
    }else if(isWin===-1){
        return <span style={{color:"red"}} className='result'>You Lose the game, Refresh</span>
    }else {
        return <span style={{color:"green"}} className='result'>You Win the game, Refresh</span>
    }
}

export default Result