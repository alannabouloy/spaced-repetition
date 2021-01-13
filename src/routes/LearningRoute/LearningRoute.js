import React, { Component } from 'react'
import LangBar from '../../components/LangBar/LangBar'
import UserContext from '../../contexts/UserContext';

class LearningRoute extends Component {

  async componentDidMount(){
    await this.context.getLanguage()
    const word = await this.context.getNextWord()
  }

  static contextType = UserContext

  render() {
    let word = ''
    if(this.context.word.nextWord){
      word = this.context.word.nextWord
    }
    return (
      <section className= 'learning-page'>
        <LangBar language={this.context.language}/>
        <p>{word}</p>
      </section>
    );
  }
}

export default LearningRoute
