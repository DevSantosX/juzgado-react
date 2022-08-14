import { useState,useEffect } from "react";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorsLength, setErrorsLength] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (errorsLength === 0) {
      setLoading(true);
      alert("enviando formulario");
      setLoading(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(Object.keys(errors).length)
    setErrorsLength(Object.keys(errors).length)
  }, [errors])
  

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export { useForm };
