import React from 'react'
import './LangBar.css'

export default function LangBar(props){
    let language = ''
    if(props.language){
        language = props.language.name
    }
    return (
        <div className='lang-bar'>
            <h2>{language}</h2>
        </div>
    )
}