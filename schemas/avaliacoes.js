// schemas/avaliacoes.js
export default {
  name: 'avaliacao',
  type: 'document',
  title: 'Avaliacao',
  fields: [
    {
      name: 'nome',
      type: 'string',
      title: 'Nome',
    },
    {
      nota: 'nota',
      type: 'string',
      title: 'Nota',
    },
    {
        insta: 'insta',
        type: 'string',
        title: 'Perfil Instagram',
    },
    {
        descricao: 'descricao',
        type: 'string',
        title: 'Descricao',
    },
  ],
}
