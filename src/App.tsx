import React, { ReactElement } from 'react'
import './App.css'
import Schedule from './containers/schedule/schedule'
import ResponsiveAppBar from './components/navbar'

function App (): ReactElement {
  return (
    <div className="App">
        <ResponsiveAppBar />
      <header className="App-header">
        <Schedule />
      </header>
    </div>
  )
}

export default App
