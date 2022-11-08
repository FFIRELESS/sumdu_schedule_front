import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ICourse } from '../../containers/schedule/ICourse'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
)

const ScheduleCard = (course: ICourse): any =>
  (
      <Box margin={1}>
      <Card sx={{ minWidth: 275, maxWidth: 350 }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <b>{course.NAME_PAIR}{bull}</b>{course.TIME_PAIR}
              </Typography>
              <Typography variant="h5" component="div">
                  {course.NAME_DISC !== '' ? course.NAME_DISC : course.REASON}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <b>{course.NAME_STUD}</b>{bull}{course.NAME_AUD !== '' ? course.NAME_AUD : 'online'}
              </Typography>
              <Typography variant="body2" gutterBottom>
                  {course.NAME_FIO}
              </Typography>
              <Typography color="text.secondary">
                  {course.NAME_GROUP}
              </Typography>
          </CardContent>
          {/* <CardActions> */}
          {/* </CardActions> */}
      </Card>
      </Box>
  )

export default ScheduleCard
