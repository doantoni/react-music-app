import React from 'react'
import './Body.css'
import Instrument from './Instrument'

const Body = (props) => {
    return (
        
        <div className="body">
          
            {props.instrument === "guitar" ? (
                "This is the guitar part"
            ) : props.instrument === "piano" ? (
                "This is the piano part"
            ) : (
                <>
                  <div className="welcome">
                Welcome User
            </div>
                <p>Choose your instrument</p>
                <Instrument onChoose = {props.onChoose}/>
                </>
            )}
           
        </div>

    )
}

export default Body
