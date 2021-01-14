import React, { Component } from 'react'
import AnswerForm from '../../components/AnswerForm/AnswerForm';
import LangBar from '../../components/LangBar/LangBar'
import ScoringSection from '../../components/ScoringSection/ScoringSection';
import WordSection from '../../components/WordSection/WordSection';
import Total from '../../components/Total/Total'
import Button from '../../components/Button/Button'
import UserContext from '../../contexts/UserContext';
import ResponseSection from '../../components/ResponseSection/ResponseSection';


class LearningRoute extends Component {
  state = {
    answered: false,
    response: '',
    feedbackMsg: ''
  }

  async componentDidMount(){
    await this.context.getLanguage()
    await this.context.getNextWord()
  }

  static contextType = UserContext

  render() {
    let word = ''
    let correct = 0
    let incorrect = 0
    let total = 0
    if(this.context.word.nextWord){
      word = this.context.word.nextWord
      correct = this.context.word.wordCorrectCount
      incorrect = this.context.word.wordIncorrectCount
      total = this.context.word.totalScore
    }

    if(this.state.answered){
      return (
        <section className='learning-page'>
          <LangBar language={this.context.language}/>
          <ResponseSection 
            total={total} 
            response={this.state.response} 
            feedbackMsg={this.state.feedbackMsg}
          />
          <Button className='next-word-button'>
            Try another word!
          </Button>
        </section>
      )

    } else{
      return (
        <section className= 'learning-page'>
          <LangBar language={this.context.language}/>
          <WordSection word={word}/>
          <AnswerForm />
          <ScoringSection correct={correct} incorrect={incorrect}/>
          <Total total={total}/>
        </section>
      );
    }    
  }
}

export default LearningRoute
