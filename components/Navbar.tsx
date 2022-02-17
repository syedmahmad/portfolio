import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-blue-800"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null
}

const Navbar = () => {
  const { pathname } = useRouter()

  const [active, setActive] = useState('')

  //later
  useEffect(() => {
    if (pathname === '/' || pathname === '/user/[id]') setActive('About')
    else if (pathname === '/user/[id]/projects') setActive('Projects')
    else if (pathname === '/user/[id]/resume') setActive('Resume')
  }, [])

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-blue-800">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/user/1/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/user/1/projects"
        />
      </div>
    </div>
  )
}

export default Navbar
