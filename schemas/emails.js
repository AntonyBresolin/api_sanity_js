// schemas/coordenacao.js
export default {
    name: 'emails',
    type: 'document',
    title: 'Emails',
    fields: [
      {
        name: 'nome',
        type: 'string',
        title: 'Nome',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'curso',
        type: 'string',
        title: 'Curso',
      },
    ],
  }
