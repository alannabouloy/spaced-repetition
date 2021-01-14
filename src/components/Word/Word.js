import React from 'react'
import './Word.css'

export default function Word(props){
    return (
        <div className='next-word'>
            <span>{props.word}</span>
        </div>
    )
}