import React from 'react'
import Navbar from './Navbar';
import Body from './Body';
import './Main.css'

const Main = ( props) => {
    console.log(props.instrument)
    return (
        
        <div className="main">
            <Navbar />
         <Body instrument={props.instrument} onChoose = {props.onChoose}/>
           
            
        </div>
    )
}

export default Main
