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
      imagem: 'imagem',
      type: 'image',
      title: 'Imagem',
    },
    {
      disciplina: 'disciplina',
      type: 'string',
      title: 'Disciplina',
    },
  ],
}
