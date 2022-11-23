import React from 'react'

const DrawHungman = ({wrongKeys}) => {
    const Head = <div key="head" style={{
        position: "absolute",
        left:"120px",
        top: "22px",
        width: "47px",
        height: "57px",
        borderRadius: "100%",
        border:"5px solid black"
    }}/>;
    const Body = <div key="body" style={{
        position:"absolute",
        top: "85px",
        left: "145px",
        width: "5px",
        height: "80px",
        backgroundColor: "black",
        borderRadius:"5px"
    }}/>;
    const Leftleg = <div key="leftleg" style={{
        position:"absolute",
        top: "155px",
        left: "145px",
        width: "80px",
        height: "5px",
        backgroundColor: "black",
        transform: "rotate(50deg)",
        transformOrigin: "left bottom",
        borderRadius:"5px"
    }}/>;
    const Rightleg = <div key="rightleg" style={{
        position:"absolute",
        top: "155px",
        left: "70px",
        width: "80px",
        height: "5px",
        backgroundColor: "black",
        transform: "rotate(-50deg)",
        transformOrigin: "right bottom",
        borderRadius:"5px"
    }}/>;
    const Leftarm = <div key="leftarm" style={{
        position:"absolute",
        top: "115px",
        left: "145px",
        width: "80px",
        height: "5px",
        backgroundColor: "black",
        transform: "rotate(-20deg)",
        transformOrigin: "left top",
        borderRadius:"5px"
    }}/>;
    const Rightarm = <div key="rightarm" style={{
        position:"absolute",
        top: "115px",
        left: "70px",
        width: "80px",
        height: "5px",
        backgroundColor: "black",
        transform: "rotate(20deg)",
        transformOrigin: "right top", 
        borderRadius:"5px"
    }}/>;
    const hungmanArr = [Head, Body, Leftarm, Rightarm, Leftleg, Rightleg]
  return (
    <div className='hungman'>
        <div style={{
            position:"absolute",
            left: "0px",
            width: "150px",
            height: "5px",
            backgroundColor: "black"
        }}/>
        <div style={{
            position:"absolute",
            top:"0px",
            width: "5px",
            height: "305px",
            backgroundColor: "black"
        }}/>
        <div style={{
            position:"absolute",
            top: "305px",
            left: "-150px",
            width: "300px",
            height: "5px",
            backgroundColor: "black"
        }}/>
        <div style={{
            position:"absolute",
            top: "0px",
            left: "145px",
            width: "5px",
            height: "27px",
            backgroundColor: "black"
        }}/>
        <div className="man">{
            hungmanArr.splice(0,wrongKeys.length).map(e=>{
                return e
            })
        }</div>  
    </div>
  )
}

export default DrawHungman