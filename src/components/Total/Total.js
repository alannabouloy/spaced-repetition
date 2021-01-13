import React from 'react'
import './Total.css'

export default function Total(props){
    return (
        <div className='total'>
          <p>Total: {props.total}</p>
        </div>
    )
}