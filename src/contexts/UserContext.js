import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'
import ApiService from '../services/api-service'

const UserContext = React.createContext({
  user: {},
  error: null,
  language: {},
  words: [],
  word: {},
  feedbackMsg: '',
  response: '',
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
  getLanguage: () => {},
  getNextWord: () => {},
  handleAnswer: () => {},
  resetAnswer: () => {},
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null, language: {}, words: [], word: {}, feedbackMsg: '', response: '',}

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
    IdleService.regiserIdleTimerResets()
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({})
  }

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({ idle: true })
  }

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  }

  getLanguage = () => {
    ApiService.getLanguage()
      .then(res => {
        const {language, words} = res
        this.setState({language, words})
      })
  }

  getNextWord = () => {
    ApiService.getNextWord()
      .then(res => {
        const word = res
        this.setState({word})
      })
  }

  handleAnswer = guess => {
    console.log('handleAnswer ran')
    const oldWord = this.state.word.nextWord
    ApiService.postAnswer(guess)
    .then(res => {
      const {nextWord, wordCorrectCount, wordIncorrectCount, totalScore, answer, isCorrect} = res
      console.log('answer', answer)
      console.log('correct', isCorrect)
      const word = {
        nextWord,
        wordCorrectCount,
        wordIncorrectCount,
        totalScore
      }
      
      let response = ''
      const feedbackMsg = `The correct translation for ${oldWord} was ${answer} and you chose ${guess}!`
      
      if(answer && isCorrect){
        response = 'You were correct! :D'
      }

      if(answer && !isCorrect){
        response = 'Good try, but not quite right :('
      }

      this.setState({word, response, feedbackMsg})
      
    })
  }

  resetAnswer = () => {
    this.setState({answered: {}})
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      language: this.state.language,
      words: this.state.words,
      word: this.state.word,
      feedbackMsg: this.state.feedbackMsg,
      response: this.state.response,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
      getLanguage: this.getLanguage,
      getNextWord: this.getNextWord,
      handleAnswer: this.handleAnswer,
      resetAnswer: this.resetAnswer,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
