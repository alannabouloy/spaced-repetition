import React, { Component } from 'react'
import Button from '../Button/Button'
import {Label, Input} from '../Form/Form'
import './AnswerForm.css'

export default class AnswerForm extends Component {

    firstInput = React.createRef()

    componentDidMount(){
        this.firstInput.current.focus()
    }
    render(){
        return(
            <form id='learn-guess'>
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
                    name='translation'
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