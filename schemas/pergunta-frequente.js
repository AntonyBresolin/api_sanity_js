// schemas/perguntas-frequentes.js
export default {
    name: 'pergunta_frequente',
    type: 'document',
    title: 'Perguntas Frequentes',
    fields: [
      {
        name: 'pergunta',
        type: 'string',
        title: 'Pergunta',
      },
      {
        name: 'resposta',
        type: 'string',
        title: 'Resposta',
      }
    ],
  }