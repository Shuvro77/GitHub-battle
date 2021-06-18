import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'

import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Popular from './components/popular'
import Battle from './components/battle'
import Results from './components/result'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }




  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />

              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </div>
          </div>

        </ThemeProvider>


      </Router>




    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App