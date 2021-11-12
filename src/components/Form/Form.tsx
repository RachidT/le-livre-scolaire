import React from 'react'
import { Formik, Field, FormikErrors, FormikTouched } from 'formik'
import { Input, Button } from 'src/components'
import * as Yup from 'yup'
import styles from './Form.module.scss'
import { FormValues } from '../StudentsList/components/AddStudent/AddStudent'
import { Students } from '../StudentsList/StudentsList'

interface Props {
  initialValues: FormValues
  submit: (values: Students) => void
}

interface InputFieldProps {
  label: string
  name: string
  placeholder?: string
  field: { [key: string]: any }
  form: {
    errors: FormikErrors<{
      [field: string]: any
    }>
    touched: FormikTouched<{
      [field: string]: any
    }>
  }
  autofocus?: boolean
  disabled?: boolean
}

const userSchema = Yup.object().shape({
  first_name: Yup.string().required('Champs requis'),
  last_name: Yup.string().required('Champs requis'),
  email: Yup.string().email("L'email doit être valide").required(),
})

const InputField = ({ field, form: { touched, errors }, ...props }: InputFieldProps) => (
  <div className={styles.InputWrapper}>
    <label className={styles.Label}> {props.label} </label>
    <Input {...props} {...field} />
    {touched[field.name] && errors[field.name] && (
      <div className={styles.Error}>{errors[field.name]}</div>
    )}
  </div>
)

const Form = ({ initialValues, submit }: Props) => (
  <Formik onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
    {({ handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <Field name="last_name" label="Nom" component={InputField} />
        <div>
          <Field name="first_name" label="Prénom" component={InputField} />
        </div>
        <div>
          <Field name="date_of_birth" label="Date de naissance" component={InputField} />
        </div>
        <div>
          <Field name="address" label="Adresse" component={InputField} />
        </div>
        <div>
          <Field name="phone" label="Téléphone" component={InputField} />
        </div>
        <div>
          <Field name="email" label="Email" component={InputField} />
        </div>
        <div className={styles.FormFooter}>
          <Button
            buttonType="success"
            type="submit"
            disabled={isSubmitting}
            className={styles.SubmitButton}
          >
            Envoyer
          </Button>
        </div>
      </form>
    )}
  </Formik>
)

export default Form
