import React from 'react'
import './Sidebar.css'
import { SideItem } from './SideItem'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://cdn.pixabay.com/photo/2016/03/26/01/17/treble-clef-1279909_1280.png" alt="treble clef" />
                <p> MUSIC APP</p>

            </div>
            <div className="sideItems">
                <SideItem text="Guitar Chords"/>
                <SideItem text="Piano Chords"/>
                <SideItem text="Songs"/>
                <SideItem text="Circle of Fifths"/>
                <SideItem text="Chord progressions"/>
            </div>

        </div>
    )
}

export default Sidebar
