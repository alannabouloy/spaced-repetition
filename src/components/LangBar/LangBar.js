import React from 'react'
import './LangBar.css'

export default function LangBar(props){
    return (
        <div className='lang-bar'>
            <h2>{props.language}</h2>
        </div>
    )
}