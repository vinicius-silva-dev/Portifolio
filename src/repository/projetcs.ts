import ToDoList from '../assets/projects/to-do-list.png'
import VsSysten from '../assets/projects/vs-systen.png'

import FestFeet from '../assets/projects/fest-feet2.png'
import FestFeet3 from '../assets/projects/fest-feet3.png'

import FindAFriend2 from '../assets/projects/find-a-friend2.png'

import Daily from '../assets/projects/daily.png'

import Chamados from '../assets/projects/chamados-gima.png'
import Chamdos2 from '../assets/projects/chamados2.png'

import Fintech from '../assets/projects/fintech.png'

import McDonald from '../assets/projects/mcdonald.png'

import delivery from '../assets/projects/delivery.png'

export const projects = [
  {
    id: 'daily-diet',
    nameProject: 'Daily Diet',
    ano: 2024,
    categoria: 'BACK-END',
    description: 'API para controle diário de dieta, onde está sendo utilizado Fastify, Knex e Typescript.',
    tecnologias: ['Node.js', 'Typescript', 'Fastify', 'Knex'],
    photos: [
      Daily,
    ]
  },
  {
    id: 'Nest-Fast-Feet',
    nameProject: 'Fast-Feet',
    ano: 2024,
    categoria: 'BACK-END',
    description: 'API para controle de encomendas de uma transportadora, onde está sendo utilizado o Nest.js como framework e conceitos de SOLID, testes e integração com banco de dados.',
    tecnologias: ['Node.js', 'Typescript', 'Nest.js', 'Prisma', 'Vitest', 'PostgreSQL'],
    photos: [
      FestFeet,
      FestFeet3
    ]
  },
  {
    id: 'find-a-friend',
    nameProject: 'Find A Friend',
    ano: 2024,
    categoria: 'BACK-END',
    description: 'API para adoção de animais, onde está sendo utilizado conceitos de SOLID e testes.',
    tecnologias: ['Node.js', 'Typescript', 'Prisma', 'Vitest', 'PostgreSQL'],
    photos: [
      FindAFriend2,
      
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
      ToDoList,
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
    description: 'Site clone do McDonald, desenvolvido para fins de estudo e prática com o Vue.js.',
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