import { Helmet } from 'react-helmet'
import Footer from './components/Footer'
import { LinkCardBox } from './components/LinkCards'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari</title>
      </Helmet>
      <div className="flex-grow flex flex-col">
        <h1 className="text-5xl mt-6 mb-6 text-gray-title dark:text-white-title">
          Afzal Ansari
        </h1>
        <p className="text-gray-text dark:text-white-text text-xl">
          I am a Developer based in Nepal.
        </p>

        <LinkCardBox
          contents={[
            {
              link: '/projects',
              title: 'Projects',
              description: 'Browse my Projects.'
            },
            {
              link: '/contact',
              title: 'Contact',
              description: 'Get in touch.'
            }
          ]}
        />

        <Footer />
      </div>
    </>
  )
}
