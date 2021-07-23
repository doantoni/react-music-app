import React from 'react'
import './Instrument.css'

const Instrument = (props) => {

const guitar = "guitar"
const piano = "piano"

    return (
    
            <div className="choose">
            <div onClick = {() => props.onChoose(guitar)} className="instrument">
                    <img src="https://cdn.picpng.com/guitar/guitar-face-31652.png" alt="guitar" />
                </div>
                <div onClick = {() => props.onChoose(piano)} className="instrument">
                    <img src="https://cdn.picpng.com/piano/piano-web-34964.png" alt="guitar" />
                </div>

                </div>
           
     
    )
}

export default Instrument
