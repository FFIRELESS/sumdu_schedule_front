import React, { ReactElement } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { Box, Button } from '@mui/material'
import { typeFormSchema } from './validationSchema'
import { IDate } from './IDate'

function TypeForm ({ currDateStr, nextDateStr, setCurrDate, setNextDate, refetch, isLoading }: IDate): ReactElement {
  const values = {
    startDate: currDateStr,
    endDate: nextDateStr
  }

  const onFormSubmit = (data: any, actions: any): any => {
    actions.setSubmitting(true)
    console.log(data)
    setCurrDate(data.startDate)
    setNextDate(data.endDate)
    if (!isLoading) {
      actions.submitForm(refetch()).then(() => actions.setSubmitting(false))
    }
  }

  return (
        <div>
            <Formik
                onSubmit={onFormSubmit}
                initialValues={values}
                validationSchema={typeFormSchema}
                validateOnBlur={false}
            >
                {({ isSubmitting, isValid }) => (
                    <Form>
                        <Box margin={1}>
                            <Field
                                component={TextField}
                                fullWidth
                                type="date"
                                name="startDate"
                                helperText="Please Enter Start Date"
                            />
                        </Box>
                        <Box margin={1}>
                            <Field
                                component={TextField}
                                fullWidth
                                type="date"
                                name="endDate"
                                helperText="Please Enter End Date"
                            />
                        </Box>
                        {/* <Box margin={1}> */}
                        {/*    <Field */}
                        {/*        component={TextField} */}
                        {/*        fullWidth */}
                        {/*        type="text" */}
                        {/*        name="Visibility" */}
                        {/*        label="Visibility" */}
                        {/*        helperText="Please Enter Visibility" */}
                        {/*        select */}
                        {/*        variant="standard" */}
                        {/*        defaultValue="all" */}
                        {/*        InputLabelProps={{ */}
                        {/*            shrink: true, */}
                        {/*        }} */}
                        {/*    > */}
                        {/*        {visibilityVars.map((option) => ( */}
                        {/*            <MenuItem key={option.value} value={option.value}> */}
                        {/*                {option.label} */}
                        {/*            </MenuItem> */}
                        {/*        ))} */}
                        {/*    </Field> */}
                        {/* </Box> */}

                        <Box margin={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting || !isValid}
                                type="submit"
                                fullWidth
                            >
                                Show
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
  )
}

export default TypeForm
