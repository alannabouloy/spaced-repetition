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
    return (
      <section className='dashboard'>
        <LangBar language={this.context.language}/>
        <Link to='/learn'>
            <div className='link-button'>
              <h3>Start Practicing</h3>
            </div>
        </Link>
        
         <WordList words={this.context.words}/>
      </section>
    );
  }
}

export default DashboardRoute
