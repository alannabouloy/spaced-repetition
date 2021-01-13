import React, { Component } from 'react'
import LangBar from '../../components/LangBar/LangBar'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';
import WordList from '../../components/WordList/WordList';
import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = UserContext

  componentDidMount(){
    this.context.getLanguage()
  }

  render() {
    let total = 0
    if(this.context.language.total_score){
      total = this.context.language.total_score
    }
    return (
      <section className='dashboard'>
        <LangBar language={this.context.language}/>
        <Link to='/learn'>
            <div className='link-button'>
              <h2>Start Practicing</h2>
            </div>
        </Link>
        
         <WordList total={total} words={this.context.words}/>
      </section>
    );
  }
}

export default DashboardRoute
