import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({ categorias: [] });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categorias) => setDadosIniciais({ categorias }))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {
        dadosIniciais.categorias.length === 0
          ? <div>Loading...</div>
          : dadosIniciais.categorias.map((categoria, index) => (
            index === 0
              ? (
                <div key={categoria.id}>
                  <BannerMain
                    videoTitle={categoria.videos[0].titulo}
                    url={categoria.videos[0].url}
                    videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                  />
                  <Carousel
                    ignoreFirstVideo
                    category={categoria}
                  />
                </div>
              )
              : (
                <Carousel
                  key={categoria.id}
                  category={categoria}
                />
              )
          ))
      }
    </PageDefault>
  );
}

export default Home;
