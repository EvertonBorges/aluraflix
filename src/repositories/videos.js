import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(dados) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  create,
};
