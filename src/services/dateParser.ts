export const parseDate = (date: string): string => {
  const arrayDate: string[] = date.split('.')
  let finalDate: string = ''

  switch (arrayDate[1]) {
    case '01':
      finalDate = 'Jan'
      break
    case '02':
      finalDate = 'Feb'
      break
    case '03':
      finalDate = 'Mar'
      break
    case '04':
      finalDate = 'Apr'
      break
    case '05':
      finalDate = 'May'
      break
    case '06':
      finalDate = 'Jun'
      break
    case '07':
      finalDate = 'Jul'
      break
    case '08':
      finalDate = 'Aug'
      break
    case '09':
      finalDate = 'Sep'
      break
    case '10':
      finalDate = 'Oct'
      break
    case '11':
      finalDate = 'Nov'
      break
    case '12':
      finalDate = 'Dec'
      break
    default:
      console.log('Date parsing error')
  }
  finalDate = finalDate.concat(' ', arrayDate[0], ', ', arrayDate[2])
  return finalDate
}
