import React, { ReactElement } from 'react'
import { ICourse } from './ICourse'
import ScheduleCard from '../../components/schedule/card'
import { Box, Typography } from '@mui/material'
import { parseDate } from '../../services/dateParser'
import { IQuery } from './IQuery'

const Schedule = function ({ isLoading, data }: IQuery): ReactElement {
  let id: number = 0
  let date: string = ''

  if (data !== undefined) {
    date = data[0]?.DATE_REG

    data.sort(function (a: { DATE_REG: string, NAME_PAIR: number }, b: { DATE_REG: string, NAME_PAIR: number }) {
      if (Date.parse(parseDate(a.DATE_REG)) > Date.parse(parseDate(b.DATE_REG)) || a.NAME_PAIR > b.NAME_PAIR) {
        return 1
      } if (Date.parse(a.DATE_REG) < Date.parse(b.DATE_REG) || a.NAME_PAIR < b.NAME_PAIR) {
        return -1
      }
      return 0
    })
  } else {
    return <div>* Data loading error *</div>
  }

  return (
        <div>
          {isLoading
            ? 'Loading...'
            : data?.map((pair: ICourse) => {
              id++
              if (id === 1 || date !== pair.DATE_REG) {
                date = pair.DATE_REG
                return (
                    <div key={id} >
                    <Box marginLeft={1} marginTop={3}>
                      <b>{pair.NAME_WDAY}</b>
                        <br/>
                      <Typography sx={{ mb: 1.5 }}>
                        {pair.DATE_REG}
                      </Typography>
                    </Box>
                <ScheduleCard key={id} {...pair} />
                    </div>
                )
              }
              return (<ScheduleCard key={id} {...pair} />)
            })}
            </div>
  )
}

export default Schedule
