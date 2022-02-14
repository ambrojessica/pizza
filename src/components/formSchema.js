import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),

  size: yup
    .string()
    .required('Required.'),

  sauce: yup
    .string()
    .required('required'),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  ham: yup.boolean(),
  ['canadian bacon']: yup.boolean(),
  pineapple: yup.boolean(),
  mushrooms: yup.boolean(),

  instructions: yup
    .string()
    .trim(),
});

export default formSchema;