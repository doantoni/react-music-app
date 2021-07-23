import React from 'react'
import './SideItem.css'

export const SideItem = ({text}) => {


    return (
        <div className="sideItem">
            <h3>{text}</h3>
        </div>
    )
}

export default SideItem