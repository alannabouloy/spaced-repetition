import React from 'react'
import './ScoringSection.css'

export default function ScoringSection(props){
    return (
        <div className='scoring'>
            <p className='correct'>
                You have answered this word correctly {props.correct} times
            </p>
            <p>
                You have answered this word incorrectly {props.incorrect} times
            </p>
        </div>
    )
}