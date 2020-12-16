import React, { Component } from 'react'
import LangBar from '../../components/LangBar/LangBar'
import { Link } from 'react-router-dom'

class DashboardRoute extends Component {
  

  render() {
    return (
      <section className='dashboard'>
        <LangBar language='language'/>
        <Link to='/learn'>
            <div className='link-button'>
              <h3>Start Practicing</h3>
            </div>
        </Link>
        
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute
