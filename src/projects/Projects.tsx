import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { BsAndroid2 } from 'react-icons/bs'

import BasketRushIcon from '../../src/assets/basket-rush-icon.png'
import SimpleJournalIcon from '../../src/assets/simple-journal-icon.png'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari | Projects</title>
      </Helmet>
      <div className="flex-grow flex flex-col align-center justify-center">
        <Header />

        <ProjectsLinkCard
          content={[
            {
              title: 'Basket Rush',
              shortDescription:
                'simple and engaging rolling ball puzzle with challenging physics-based gameplay.',
              link: '/projects/basket-rush',
              icon: BasketRushIcon,
              type: 'Game',
              platform: 'Android'
            },
            {
              title: 'Simple Journal',
              shortDescription: 'A Simple Journaling App.',
              link: '/projects/simple-journal',
              icon: SimpleJournalIcon,
              type: 'App',
              platform: 'Android'
            }
          ]}
        />

        <Footer />
      </div>
    </>
  )
}

type ProjectsLinkCardContent = {
  title: string
  shortDescription: string
  link: string
  icon: string
  type: 'App' | 'Game'
  platform: 'Android'
}

export function ProjectsLinkCard({
  content
}: {
  content: ProjectsLinkCardContent[]
}) {
  return (
    <>
      <div className="w-full flex flex-col mt-4 overflow-auto">
        {content.map(data => {
          return (
            <Link
              to={data.link}
              className="flex flex-row px-4 py-4 mb-4 border-2 border-gray-text dark:border-white-text hover:border-blue-prime dark:hover:border-blue-prime hover:opacity-90 dark:hover:opacity-90 rounded-md"
            >
              <img src={data.icon} className="h-28 rounded-md" />
              <div className="ml-2 flex flex-col h-full w-full">
                <h2 className="text-lg flex items-center mb-[2px] font-semibold text-gray-title dark:text-white-title">
                  {data.title}{' '}
                  {data.platform === 'Android' ? (
                    <BsAndroid2 className="ml-2" fontSize={16} />
                  ) : null}
                </h2>
                <p className="text-gray-text dark:text-white-text">
                  {data.shortDescription}
                </p>
                <p className="text-sm flex mt-auto text-gray-text dark:text-white-text">
                  Type: <p className="ml-1 italic">{data.type}</p>
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
