import React from 'react'
import './WordTab.css'

export default function WordTab(props){
    return(
        <li className='word-tab'>
            <h4>{props.word}</h4>
            <div className='score-bar'>
                <p>correct answer count: {props.correct}</p>
                <p>incorrect answer count: {props.incorrect}</p>
            </div>
        </li>
    )
}