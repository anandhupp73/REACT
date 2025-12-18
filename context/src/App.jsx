import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

const mycontext = React.createContext()
function App(){
  const value = "hello from context"
  return(
    <>
      <mycontext.Provider value={value}>
        <ChildComponent/>
      </mycontext.Provider>
    </>
  )
}
function ChildComponent(){
  const contextValue = useContext(mycontext)
  return(
    <>
      <h1>{contextValue}</h1>
    </>
  )
}
export default App