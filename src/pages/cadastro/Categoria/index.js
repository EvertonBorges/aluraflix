import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categoria, setCategoria] = useState(categoriaInicial);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategorias([...categorias, categoria]);
    setCategoria(categoriaInicial);
  };

  const handleCategoria = (event) => {
    const { target } = event;
    const chave = target.getAttribute('name');
    const valor = target.value;

    setCategoria({
      ...categoria,
      [chave]: valor,
    });
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
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
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={categoria.nome}
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
          categorias.map((cat) => <li key={`${cat.nome}`}>{cat.nome}</li>)
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
