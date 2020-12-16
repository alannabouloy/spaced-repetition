import React from 'react'
import WordTab from '../WordTab/WordTab'
import './WordList.css'

export default function WordList(props){
    const wordList = props.words.map(word => <WordTab word={word.original} correct={word.correct_count} incorrect={word.incorrect_count}/>)
        
    return (
        <div className='practice-section'>
            <div className='list-toggle'>
                <h3>Words to Practice</h3>
                <ul className={`word-list`}>
                    {wordList}
                </ul>
            </div>
        </div>
    )
}