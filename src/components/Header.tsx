import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

export default function Header() {
  const location = useLocation()
  // eslint-disable-next-line
  let returnToData = {
    link: '/',
    title: 'Home'
  }

  if (
    location.pathname === '/projects/simple-journal' ||
    location.pathname === '/projects/basket-rush'
  ) {
    returnToData.link = '/projects'
    returnToData.title = 'Projects'
  }

  return (
    <>
      <div className="w-full pl-2 sm:pl-0 my-1 text-gray-title dark:text-white-title hover:text-blue-prime dark:hover:text-blue-prime">
        <Link to={returnToData.link} className="flex">
          <FaArrowLeft fontSize={20} />
          <p className="ml-1">{returnToData.title}</p>
        </Link>
      </div>
    </>
  )
}
