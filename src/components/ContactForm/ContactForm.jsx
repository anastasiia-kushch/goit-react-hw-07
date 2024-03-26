import { useId } from 'react';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from '../ContactForm/ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required('Required'),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.input}
        ></Field>
        <ErrorMessage
          type="text"
          name="name"
          component="p"
          className={css.error}
        />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          placeholder="000-00-00"
          className={css.input}
        ></Field>
        <ErrorMessage
          type="text"
          name="number"
          component="p"
          className={css.error}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
