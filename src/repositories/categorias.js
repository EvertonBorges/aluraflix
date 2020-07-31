import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
}

function getAll() {
  return fetch(URL_CATEGORIES).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
