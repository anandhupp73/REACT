import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// const mycontext = React.createContext()
// function App(){
//   const value = "hello from context"
//   return(
//     <>
//       <mycontext.Provider value={value}>
//         <ChildComponent/>
//       </mycontext.Provider>
//     </>
//   )
// }
// function ChildComponent(){
//   const contextValue = useContext(mycontext)
//   return(
//     <>
//       <h1>{contextValue}</h1>
//     </>
//   )
// }
// export default App

const ThemeContext = React.createContext()
function ThemeProvider({children}){
  const [theme,setTheme] = useState('light');

  const toggleTheme=()=>{
    setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'));
  };
  return(
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

function ThemedButton(){
  const {theme,toggleTheme} = useContext(ThemeContext);

  return(
    <>
      <button onClick={toggleTheme} style={{backgroundColor:theme==='light'?'#000':'#fff'}}>toggleTheme({theme})</button>
    </>
  )
}

function App(){
  return(
    <>
      <ThemeProvider>
      <ThemedButton/>
      </ThemeProvider>
    </>
  )
}

export default App