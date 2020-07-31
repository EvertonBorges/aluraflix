import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import videosRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulos = categorias.map(({ titulo }) => titulo);
  const { handleChanges, values } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriaRepository.getAll()
      .then((response) => {
        setCategorias(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Cadastrando...');

    const categoriaId = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({ titulo: values.titulo, url: values.url, categoriaId })
      .then((response) => {
        console.log('Cadastrou com sucesso!');

        history.push('/');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChanges}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChanges}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChanges}
          suggestions={titulos}
        />

        <Button to="#">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
