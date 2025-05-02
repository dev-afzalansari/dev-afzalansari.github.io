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
        <h1 className="text-5xl mt-6 mb-6 text-gray-title font-bold dark:text-white-title">
          Afzal Ansari
        </h1>
        <p className="text-gray-text dark:text-white-text text-xl">
          I am a Developer based in Nepal.
        </p>

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
    <div className="w-full flex justify-evenly my-auto">
      {contents.map(data => {
        return (
          <Link
            to={data.link}
            className="w-56 pt-4 pr-4 pb-6 pl-4 border-2 border-gray-text dark:border-white-text hover:border-blue-prime hover:dark:border-blue-prime hover:opacity-90 dark:hover:opacity-90 rounded-md"
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
