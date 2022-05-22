import { useState } from "react";

const useForm = (initialValue) => {

  const [formValues, setFormValues] = useState(initialValue);
  const [infoMsg, setInfoMsg] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoMsg(true);
  };

  return [infoMsg, formValues, handleChange, handleSubmit];

};

export default useForm;


// const initialFormValues = {
//   name: '',
//   size: '',
//   sauce: '',
//   pepperoni: false,
//   sausage: false,
//   ham: false,
//   ['canadian Bacon']: false,
//   pineapple: false,
//   mushroom: false,
//   instructions: '',
// };

// const formErrors = {
//   name: '',
//   size: '',
//   sauce: '',
//   instructions: ''
// };

