import { Helmet } from 'react-helmet'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari</title>
      </Helmet>
      <div className="flex-grow flex flex-col">
        <div className="pl-2 sm:pl-0">
          <h1 className="text-4xl sm:text-5xl mt-6 mb-6 text-gray-title font-bold dark:text-white-title">
            Afzal Ansari
          </h1>
          <p className="text-gray-text dark:text-white-text text-lg sm:text-xl">
            I am a Developer based in Nepal.
          </p>
        </div>

        <HomeLinkCard
          contents={[
            {
              link: '/projects',
              title: 'Projects',
              description: 'Browse my Projects.'
            },
            {
              link: '/links',
              title: 'Links',
              description: 'Find me on...'
            }
          ]}
        />

        <Footer />
      </div>
    </>
  )
}

type HomeLinkCardContent = { title: string; description: string; link: string }

function HomeLinkCard({ contents }: { contents: HomeLinkCardContent[] }) {
  return (
    <div className="w-full flex flex-wrap justify-evenly my-auto">
      {contents.map(data => {
        return (
          <Link
            to={data.link}
            className="w-72 mx-2 sm:mx-0 sm:w-56 min-w-40 pt-2 pr-2 pb-4 pl-2 sm:pt-4 sm:pr-4 sm:pb-6 sm:pl-4 mb-2 border-2 border-gray-text dark:border-white-text hover:border-blue-prime hover:dark:border-blue-prime hover:opacity-90 dark:hover:opacity-90 rounded-md"
            id="link-card-box"
          >
            <h2
              className="text-lg text-gray-title dark:text-white-title font-semibold mb-1"
              id="card-title"
            >
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
