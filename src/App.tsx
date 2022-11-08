import React, { ReactElement } from 'react'
import './App.css'
import Schedule from './containers/schedule/schedule'
import { Box, Typography } from '@mui/material'

function App (): ReactElement {
  return (
    <div className="App">
        <Box sx={{ minWidth: 350, minHeight: 70 }}>
            <img src={'./media/ssu.png'} alt={'ssu'}/>
            <Typography bgcolor={'black'} variant="h3" color={'white'}>
               SUMDU Schedule
            </Typography>
        </Box>
      <header className="App-header">
        <Schedule />
      </header>
    </div>
  )
}

export default App
