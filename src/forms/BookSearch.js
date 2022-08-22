import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


const FormSchema = Yup.object({
    title: Yup.string().required()
})

export default function BookSearch() {
    const initialValues = {
        title:''
    }

    const handleSubmit=(values)=>{
        console.log(values)
        console.log('code is here')
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id='title'
            name='title'
            lable='Book Title'
            placeholder='Search by Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error = {formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            color='info'
            fullWidth
        />
 
      <Button type='submit'>Find Book</Button>

    </form>
  )
}