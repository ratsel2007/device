// Core
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { Home } from './components/Home'
import { Profile } from './components/view/Profile'
import { AddDevice } from './components/view/AddDevice'
import { LoginForm } from './components/loginForm'

// Other
import { client } from './init/client'
import { AuthProvider } from './utils/context/AuthContext'
import { AuthRoute } from './utils/AuthRoute'

const App = () => {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <Router>
                    <Route exact path='/' component={Home}/>
                    <AuthRoute exact path='/login' component={LoginForm}/>
                    <Route path='/devices/:id' component={Profile}/>
                    <Route path='/addNewDevice' component={AddDevice}/>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    )
}
export default App
