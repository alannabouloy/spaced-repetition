import React from 'react'
import Feedback from '../Feedback/Feedback'
import Total from '../Total/Total'
import './ResponseSection.css'

export default function ResponseSection(props){
    return(
        <div className='response'>
            <h2>{props.response}</h2>
            <Feedback feedbackMsg={props.feedbackMsg}/>
            <Total total={props.total}/>
          </div>
    )
}