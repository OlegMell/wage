import React from 'react'

import { Header } from './components/header/Header'
import { Loader } from './components/loader/Loader'
import { AuthForm } from './features/auth/auth-form/AuthForm'

import './App.css'


export function App(): React.ReactElement {
    return (
        <div className="App">
            <Header />
            {/* <Loader /> */}
            <AuthForm />
        </div>
    )
}