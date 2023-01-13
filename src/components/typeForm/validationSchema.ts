import * as Yup from 'yup'

export const typeFormSchema = Yup.object().shape({
  startDate: Yup.date().typeError('Start date error').required(),
  endDate: Yup.date().typeError('End date error').required()
})
