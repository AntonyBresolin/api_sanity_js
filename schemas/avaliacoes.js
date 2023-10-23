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
        name: 'curso',
        type: 'string',
        title: 'Curso Realizado',
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem da pessoa',
    },
    {
        name: 'descricao',
        type: 'string',
        title: 'Descricao',
    }
  ]
}
