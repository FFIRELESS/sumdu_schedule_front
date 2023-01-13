export const parseDateRvrs = (date: string): string => {
  const arrayDate: string[] = date.split('-')
  return arrayDate[2] + '.' + arrayDate[1] + '.' + arrayDate[0]
}
