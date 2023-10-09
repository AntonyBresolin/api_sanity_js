// schemas/professores.js
export default {
  name: 'professor',
  type: 'document',
  title: 'Professor',
  fields: [
    {
      name: 'nome',
      type: 'string',
      title: 'Nome',
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem',
    },
    {
      name: 'disciplina',
      type: 'string',
      title: 'Disciplina',
    },
  ],
}
