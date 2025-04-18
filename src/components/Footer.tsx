import { FaGithub, FaMedium, FaReddit } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { useCtx } from './Context'

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { BiHomeAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="w-full mt-auto mx-auto mb-0">
        <hr className="w-full border-t text-gray-text dark:text-white-text mb-1" />
        <div className="flex py-1">
          <Link to="/" className="mr-auto">
            <BiHomeAlt2
              fontSize={22}
              className="text-gray-text dark:text-white-text hover:text-blue-prime dark:hover:text-blue-prime"
            />
          </Link>
          <div className="flex justify-center gap-5 mx-auto text-base">
            <a
              href="https://github.com/dev-afzalansari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-text dark:text-white-text hover:text-blue-prime dark:hover:text-blue-prime hover:opacity-90"
            >
              <FaGithub fontSize={20} />
            </a>
            <a
              href="https://medium.com/@dev-afzalansari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-text dark:text-white-text hover:text-blue-prime dark:hover:text-blue-prime hover:opacity-90"
            >
              <FaMedium fontSize={20} />
            </a>
            <a
              href="https://www.reddit.com/user/afzalansari072/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-text dark:text-white-text hover:text-blue-prime dark:hover:text-blue-prime hover:opacity-90"
            >
              <FaReddit fontSize={20} />
            </a>
            <a
              href="https://x.com/afzalansari_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-text dark:text-white-text hover:text-blue-prime dark:hover:text-blue-prime hover:opacity-90"
            >
              <BsTwitterX fontSize={20} />
            </a>
          </div>
          <ThemeIcon />
        </div>
      </div>
    </>
  )
}

function ThemeIcon() {
  const { theme, toggleTheme } = useCtx()

  return (
    <button onClick={toggleTheme} className="ml-auto">
      {theme === 'dark' ? (
        <MdOutlineLightMode
          fontSize={22}
          className="text-white-text hover:text-blue-prime dark:hover:text-blue-prime"
        />
      ) : (
        <MdOutlineDarkMode fontSize={22} className="hover:text-blue-prime" />
      )}
    </button>
  )
}
