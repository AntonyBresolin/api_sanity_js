// schemas/coordenacao.js
export default {
    name: 'coordenacao',
    type: 'document',
    title: 'Coordenacao',
    fields: [
      {
        name: 'nome',
        type: 'string',
        title: 'Nome',
      },
      {
        name: 'genero',
        type: 'string',
        title: 'Gênero',
        options: {
          list: [
            { title: 'Masculino', value: 'masculino' },
            { title: 'Feminino', value: 'feminino' },
          ],
        },
      },
      {
        name: 'imagem',
        type: 'image',
        title: "Imagem",
        options: {
            hotspot: true
          },
      }
    ],
  }
  