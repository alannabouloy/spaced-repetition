import React, { Component } from 'react'
import './AnswerForm.css'

export default class AnswerForm extends Component {
    render(){
        return(
            <form id='learn-guess'>
                <div className='form-label'>
                    <label htmlFor='learn-guess-input'>
                        What's the translation for this word?
                    </label>
                </div>
                <div className='form-field'>
                    <input type='text' id='learn-guess-input' required/>
                </div>
                <div className='form-submit'>
                    <button className='submit' type='submit'>
                        Submit your answer
                    </button>
                </div>
            </form>
        )
    }
}