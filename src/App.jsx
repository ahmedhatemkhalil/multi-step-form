import React from 'react'
import LayOut from './components/layout/LayOut'
import { AppContextProvider } from './components/context/Context'
function App() {
  return (
    <>
    <AppContextProvider>

    <LayOut/>
    </AppContextProvider>
    </>
  )
}

export default App