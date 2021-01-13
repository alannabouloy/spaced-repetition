import React from 'react'
import Word from '../Word/Word'
import './WordSection.css'

export default function WordSection(props){
    return(
        <div className='translate'>
          <h2>Translate the word: </h2>
          <Word word={props.word}/>
        </div>
    )
}