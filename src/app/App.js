// Core
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { Home } from './components/Home';
import Main from './components/view';
import { Profile } from './components/view/Profile';

// Other
import { client } from './init/client'


const App = () => {
    return (
        <ApolloProvider client={client} >
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Main} />
                <Route path='/devices/:id' component={Profile} />
            </Router>
        </ApolloProvider>
    )
}
export default App
