import React from 'react'
import './Feedback.css'

export default function Feedback(props){
    return(
        <p className='display-feedback'>
              {props.feedbackMsg}
        </p>
    )
}