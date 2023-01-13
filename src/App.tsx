import React, { ReactElement, useState } from 'react'
import './App.css'
import Schedule from './containers/schedule/schedule'
import ResponsiveAppBar from './components/navbar'
import TypeForm from './components/typeForm/typeForm'
import { useQuery } from 'react-query'
import { getSchedule } from './containers/schedule/crud'
import { config } from './config/app.config'
import { parseDateRvrs } from './services/dateParserRvrs'

function App (): ReactElement {
  const currDate: Date = new Date()
  const [currDateStr, setCurrDate] = useState(new Date().toISOString().substring(0, 10))
  const [nextDateStr, setNextDate] = useState(new Date(new Date().setDate(currDate.getDate() + 14)).toISOString().substring(0, 10))

  const { isLoading, data, refetch } = useQuery(
    'schedule',
    async () => await getSchedule(config.KB91_GROUP_ID, parseDateRvrs(currDateStr), parseDateRvrs(nextDateStr))
  )

  return (
    <div className="App">
        <ResponsiveAppBar />
      <header className="App-header">
          <TypeForm currDateStr={currDateStr} nextDateStr={nextDateStr} setCurrDate={setCurrDate} setNextDate={setNextDate} refetch={refetch} isLoading={isLoading}/>
        <Schedule isLoading={isLoading} data={data}/>
      </header>
    </div>
  )
}

export default App
