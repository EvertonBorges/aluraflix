import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const categoriaInicial = { 
        nome: '', 
        descricao: '', 
        cor: '#000000' 
    };

    const [categoria, setCategoria] = useState(categoriaInicial);

    const handleSubmit = event => {
        event.preventDefault();

        setCategorias([...categorias, categoria]);
        setCategoria(categoriaInicial);
    }

    const handleCategoria = event => {
        const target = event.target;
        const chave = target.getAttribute('name');
        const valor = target.value;

        setCategoria({
            ...categoria,
            [chave]: valor
        });
    };

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="nome" 
                    value={categoria.nome} 
                    handleChange={handleCategoria} 
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao" 
                    value={categoria.descricao} 
                    handleChange={handleCategoria} 
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor" 
                    value={categoria.cor} 
                    handleChange={handleCategoria} 
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {
                    categorias.map((categoria, index) => <li key={index}>{categoria.nome}</li>)
                }
            </ul>
            
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;