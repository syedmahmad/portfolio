import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const About: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname == '/') {
      router.replace('/user/1')
    }
  }, [])
  return null
}

export default About
