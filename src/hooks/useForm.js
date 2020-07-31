import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  const handleChanges = (event) => {
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

  return { values, handleChanges, clearForm };
}

export default useForm;
