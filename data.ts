import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IProject, Service, Skill } from './types'

import { BsCircleFill } from 'react-icons/bs'


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
