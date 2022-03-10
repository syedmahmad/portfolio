import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getPageData } from '../pages/api/getData'
const Sidebar = (props: any) => {
  const { theme, setTheme } = useTheme()
  const [name, setName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState('')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const data = async () => {
      let data = await getPageData("/api/name");
      setName(data?.data?.attributes?.name || "");
      setJobTitle(data?.data?.attributes?.Job_Title || "");
      setAddress(data?.data?.attributes?.address || "");
      setEmail(data?.data?.attributes?.email || "");
      setPhone(data?.data?.attributes?.phone || "");
      let profile = await getPageData("/api/profile?populate=*")
      await setProfile(profile?.data?.attributes?.pic?.data?.attributes?.formats?.large?.url)
    }
    data();
  }, [])
  return (
    <>
      <img
        src={`http://localhost:1337${profile}`}
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-800">{name}</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        {jobTitle}
      </p>
      {/* Resume */}
      <a
        href="/assets/Usama Ashfaq Resume.pdf"
        download="Usama Ashfaq Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full text-blue-800">
        <a href="#" target='_blank'>
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#" target='_blank'>
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/syedmahmad" target='_blank'>
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{' '}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>{address} </span>
        </div>
        <p className="my-2 "> {email} </p>
        <p className="my-2"> {phone} </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:devm.ahmad@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  )
}

export default Sidebar
