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
        name: 'imagem',
        type: 'image',
        title: "Imagem",
        options: {
            hotspot: true
          },
      }
    ],
  }
  