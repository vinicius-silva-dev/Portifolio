import ToDoList from '../assets/projects/to-do-list.png'
import VsSysten from '../assets/projects/vs-systen.png'

import Chamados from '../assets/projects/chamados-gima.png'
import Chamdos2 from '../assets/projects/chamados2.png'

import Fintech from '../assets/projects/fintech.png'

import McDonald from '../assets/projects/mcdonald.png'

import delivery from '../assets/projects/delivery.png'

export const projects = [
  {
    id: 'to-do-list-backend',
    nameProject: 'To-Do-List (BACK-END)',
    ano: 2024,
    categoria: 'BACK-END',
    description: 'API de gerenciamento de tarefas, onde é possível criar novas tarefas, listar todas as tarefas e filtrar também, é possível editar e deletar as tarfas.',
    tecnologias: ['Node.js', 'Typescript', 'Fastify', 'PostgreSQL'],
    photos: [
      ToDoList,
    ]
  },
  {
    id: 'to-do-list-backend',
    nameProject: 'To-Do-List (BACK-END)',
    ano: 2024,
    categoria: 'BACK-END',
    description: 'API de gerenciamento de tarefas, onde é possível criar novas tarefas, listar todas as tarefas e filtrar também, é possível editar e deletar as tarfas.',
    tecnologias: ['Node.js', 'Typescript', 'Fastify', 'PostgreSQL'],
    photos: [
      VsSysten,
    ]
  },
  {
    id: 'vs-systen',
    nameProject: 'VS-SYSTEN',
    ano: 2024,
    categoria: 'FRONT-END',
    description: 'Sistema de gestão empresarial, onde conta com funcionalidade que ajuda a gerir uma empresa. O sistema conta com funcionalide como cadastro de usuários/funcionarios e produtos. Conta também com um sistema PDV para fazer as vendas.',
    tecnologias: ['Vue.js','Node.js', 'Typescript', 'Fastify', 'PostgreSQL'],
    photos: [
      VsSysten,
    ]
  },
  {
    id: 'Chamados-Gima',
    nameProject: 'Chamados Gima',
    ano: 2024,
    categoria: 'FRONT-END',
    description: 'Sistema de chamados  desenvolvido para a concecionária Fiat Gima Jaru, com o objetivo de organizar todas as ocorrênciase facilitar na resolução de problemas.',
    tecnologias: ['Vue.js', 'Node.js', 'Fastify', 'PostgreSQL'],
    photos: [
      Chamados,
      Chamdos2
    ]
  },
  {
    id: 'Fintech',
    nameProject: 'Fintech',
    ano: 2025,
    categoria: 'FRONT-END',
    description: 'Sistema dashboard onde ilustra diversos dados e estatisticas da empresa, nesse sistemo podemos vizualizar as vendas por cliente, podemos filtra quanto tivemos de vendas, recebimento e os que tem para receber em determinado mês.',
    tecnologias: ['React', 'Typescript'],
    photos: [
      Fintech
    ]
  },
  {
    id: 'mcdonald',
    nameProject: `Mc'Donald`,
    ano: 2023,
    categoria: 'FRONT-END',
    description: 'Site clone do McDonald.',
    tecnologias: ['Vue.js'],
    photos: [
      McDonald
    ]
  },
  {
    id: 'Delivery-React-Native',
    nameProject: `Delivery`,
    ano: 2024,
    categoria: 'FRONT-END',
    description: 'App de delivery, onde pode ser utilizado em lanchonetes e restaurantes, facilitando o atendimento ao cliente e proporcinado uma experiência agradavel ao cliente. App desenvolvido no evento NLW expert da Rocketseat, trilha React Native.',
    tecnologias: ['React Native'],
    photos: [
      delivery
    ]
  },
]