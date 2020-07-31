import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

import config from '../../../config';

function CadastroCategoria() {
  const categoriaInicial = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { categoria, handleCategoria, clearForm } = useForm(categoriaInicial);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategorias([...categorias, categoria]);
    clearForm();
  };

  useEffect(() => {
    const URL = `${config.URL_BACKEND}/categorias`;
    fetch(URL).then(async (response) => {
      const categoriasServidor = await response.json();
      setCategorias([...categoriasServidor]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={categoria.titulo}
          onChange={handleCategoria}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleCategoria}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleCategoria}
        />

        <Button to="#">
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>
        {
          categorias.map((cat) => <li key={`${cat.titulo}`}>{cat.titulo}</li>)
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
