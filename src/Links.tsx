import { Helmet } from 'react-helmet'
import Footer from './components/Footer'
import Header from './components/Header'

import {
  FaGithub,
  FaMedium,
  FaReddit,
  FaItchIo,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { MdOutlineOpenInNew } from 'react-icons/md'

export default function Links() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari | Links</title>
      </Helmet>
      <div className="flex-grow flex flex-col align-center justify-center">
        <Header />

        <ContactLinkCard
          content={[
            {
              title: 'GitHub',
              link: 'https://github.com/dev-afzalansari',
              Icon: (...args: any) => <FaGithub {...args} />
            },
            {
              title: 'Reddit',
              link: 'https://www.reddit.com/user/afzalansari072/',
              Icon: (...args: any) => <FaReddit {...args} />
            },
            {
              title: 'X',
              link: 'https://x.com/afzalansari_dev',
              Icon: (...args: any) => <BsTwitterX {...args} />
            },
            {
              title: 'Facebook',
              link: 'https://www.facebook.com/profile.php?id=61576089922712',
              Icon: (...args: any) => <FaFacebook {...args} />
            },
            {
              title: 'Instagram',
              link: 'https://www.instagram.com/afzalansari0720/',
              Icon: (...args: any) => <FaInstagram {...args} />
            },
            {
              title: 'Itch.IO',
              link: 'https://afzal-ansari.itch.io',
              Icon: (...args: any) => <FaItchIo {...args} />
            },
            {
              title: 'Medium',
              link: 'https://medium.com/@dev-afzalansari',
              Icon: (...args: any) => <FaMedium {...args} />
            }
          ]}
        />

        <Footer />
      </div>
    </>
  )
}

type ContactLinkCardContent = {
  title: string
  link: string
  Icon: any
}

export function ContactLinkCard({
  content
}: {
  content: ContactLinkCardContent[]
}) {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap justify-evenly mt-4 overflow-auto px-2 sm:px-0">
        {content.map(data => {
          return (
            <a
              href={data.link}
              className="flex flex-row items-center w-full sm:w-[48%] mb-2 py-1 px-2 text-2xl sm:text-4xl text-gray-text dark:text-white-text border-2 rounded-md border-gray-text dark:border-white-text hover:border-blue-prime dark:hover:border-blue-prime hover:opacity-90 dark:hover:opacity-90"
              target="_blank"
            >
              <data.Icon />{' '}
              <h2 className="text-gray-title text-3xl dark:text-white-title font-semibold ml-2">
                {data.title}
              </h2>
              <MdOutlineOpenInNew className="ml-auto" />
            </a>
          )
        })}
      </div>
    </>
  )
}
