// Core
import React, { useContext } from 'react'

// Components
import { Header } from './Header'
import Main from './view'
import { AuthContext } from '../utils/context/AuthContext';

export const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Header />
            {user && <Main/>}
        </>

    )
}