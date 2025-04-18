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
      <div className="w-full my-1">
        <Link to={returnToData.link} className="flex">
          <FaArrowLeft fontSize={20} />
          <p className="ml-1">{returnToData.title}</p>
        </Link>
      </div>
    </>
  )
}
