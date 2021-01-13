import React from 'react'
import './Word.css'

export default function Word(props){
    return (
        <div className='next-word'>
            <h2>{props.word}</h2>
        </div>
    )
}