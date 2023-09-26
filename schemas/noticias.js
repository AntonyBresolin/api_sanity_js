// schemas/noticias.js
export default {
    name: 'noticia',
    type: 'document',
    title: 'Noticia',
    fields: [
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem da noticia',
      },
      {
        link: 'link',
        type: 'string',
        title: 'Link da noticia',
      },
    ],
  }