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
      name: 'nota',
      type: 'string',
      title: 'Nota',
    },
    {
        name: 'insta',
        type: 'string',
        title: 'Perfil Instagram',
    },
    {
        name: 'descricao',
        type: 'string',
        title: 'Descricao',
    }
  ]
}
