import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IProject, Service, Skill } from './types'

import { BsCircleFill } from 'react-icons/bs'

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about:
      'a daily problem solver in <b>HackerRank</b> and <b>LinkedIn Test<b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
]

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Material UI',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Chakra UI',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Nuxt.js',
    level: '40',
  },
]

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45',
  },
]

export const projects: IProject[] = [
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react', 'mongo'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
  {
    name: 'Plexuss',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/Plexuss.png',
    deployed_url: 'https://plexuss.com/',
    github_url: '',
    category: ['react'],
    key_techs: ['Next.js', 'Strapi', 'Laravel'],
  },
]
