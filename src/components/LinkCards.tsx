import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

type LinkCardBoxContent = { title: string; description: string; link: string }

export function LinkCardBox({ contents }: { contents: LinkCardBoxContent[] }) {
  return (
    <div className="w-full flex justify-evenly my-auto">
      {contents.map(data => {
        return (
          <Link
            to={data.link}
            className="w-56 pt-4 pr-4 pb-6 pl-4 border-2 border-gray-text dark:border-white-text hover:border-blue-prime hover:dark:border-blue-prime hover:opacity-90 rounded-md"
          >
            <h2 className="text-lg text-gray-title dark:text-white-title font-semibold mb-1">
              {data.title}
            </h2>
            <div className="w-full flex text-gray-text dark:text-white-text">
              <p className="text-sm">{data.description}</p>
              <FaArrowRight fontSize={20} className="ml-auto" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
