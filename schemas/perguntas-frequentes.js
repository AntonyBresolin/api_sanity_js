// schemas/perguntas-frequentes.js
export default {
    name: 'pergunta_frequentes',
    type: 'document',
    title: 'Pergunta Frequentes',
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