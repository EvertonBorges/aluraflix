import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  const handleCategoria = (event) => {
    const { target } = event;
    const chave = target.getAttribute('name');
    const valor = target.value;

    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return { categoria: values, handleCategoria, clearForm };
}

export default useForm;
