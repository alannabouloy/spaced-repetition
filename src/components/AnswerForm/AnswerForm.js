import React, { Component } from 'react'
import Button from '../Button/Button'
import {Label, Input} from '../Form/Form'
import './AnswerForm.css'

export default class AnswerForm extends Component {

    firstInput = React.createRef()

    componentDidMount(){
        this.firstInput.current.focus()
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { guess } = ev.target
        this.props.handleAnswer(guess.value.toLowerCase())
    }

    render(){
        return(
            <form id='learn-guess' onSubmit={e => this.handleSubmit(e)}>
                <div className='form-label'>
                    <Label htmlFor='learn-guess-input'>
                        What's the translation for this word?
                    </Label>
                </div>
                <div className='form-field'>
                    <Input 
                    ref={this.firstInput}
                    type='text' 
                    id='learn-guess-input'
                    name='guess'
                    required
                    />
                </div>
                <div className='form-submit'>
                    <Button className='submit-button' type='submit'>
                        Submit your answer
                    </Button>
                </div>
            </form>
        )
    }
}