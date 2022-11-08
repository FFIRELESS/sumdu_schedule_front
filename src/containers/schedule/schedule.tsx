import React from 'react'
import { useQuery } from 'react-query'
import { getScheduleJS } from './crud'
import { ICourse } from './ICourse'
import CardSchedule from '../../components/schedule/card'
import { Box, Typography } from '@mui/material'

const Schedule = function (): any {
  const { isLoading, data } = useQuery('schedule', async () => await getScheduleJS())
  let id: number = 0
  let date: string = ''
  let sortedData: ICourse[] = []

  if (data !== undefined) {
    date = data[0]?.DATE_REG

    // sortedData = data.reduce((acc: { [x: string]: Array<{ DATE_REG: string | number }> }, obj: { DATE_REG: string | number }) => {
    //   acc[obj.DATE_REG] = acc[obj.DATE_REG] || []
    //   acc[obj.DATE_REG].push(obj)
    //   return acc
    // })

    data.sort(function (a: { NAME_PAIR: number }, b: { NAME_PAIR: number }) {
      if (a.NAME_PAIR > b.NAME_PAIR) {
        return 1
      } if (a.NAME_PAIR < b.NAME_PAIR) {
        return -1
      }
      return 0
    })
  }

  console.log(sortedData)

  return (
        <div>
          {isLoading
            ? 'Loading...'
            : data.map((pair: ICourse) => {
              id++
              if (id === 1 || date !== pair.DATE_REG) {
                date = pair.DATE_REG
                return (
                    <div key={id} >
                    <Box marginLeft={1}>
                        {pair.NAME_WDAY}
                        <br/>
                      <Typography sx={{ mb: 1.5 }} color="white">
                        {pair.DATE_REG}
                      </Typography>
                    </Box>
                <CardSchedule key={id} course={pair} />
                    </div>
                )
              }
              return (<CardSchedule key={id} course={pair} />)
            })}
            </div>
  )
}

export default Schedule
