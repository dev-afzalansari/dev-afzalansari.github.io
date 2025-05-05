import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { FaItchIo, FaSteam, FaGooglePlay } from 'react-icons/fa'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Icon from '../../../src/assets/basket-rush-icon.png'
import Screenshot1 from '../../../src/assets/basket-rush-screenshot-1.png'
import Screenshot2 from '../../../src/assets/basket-rush-screenshot-2.png'
import Screenshot3 from '../../../src/assets/basket-rush-screenshot-3.png'
import Screenshot4 from '../../../src/assets/basket-rush-screenshot-4.png'

export default function BasketRush() {
  return (
    <>
      <Helmet>
        <title>Projects | Basket Rush</title>
      </Helmet>
      <div className="w-full h-full flex flex-col">
        <Header />

        <div className="flex-grow overflow-auto">
          <ProjectsHeader
            title="Basket Rush"
            Icon={Icon}
            shortDescription="simple and engaging rolling ball puzzle with challenging physics-based gameplay."
            downloadLinks={[
              {
                store: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.devafzalansari.basketrush'
              },
              {
                store: 'Itch.IO',
                link: 'https://afzal-ansari.itch.io/basket-rush'
              }
            ]}
          />

          <ProjectScreenshots
            images={[Screenshot1, Screenshot2, Screenshot3, Screenshot4]}
          />

          <ProjectDescription>
            <p>
              Embark on a thrilling puzzle adventure with Basket Rush, a minimal
              yet engaging rolling ball game designed to test your precision,
              timing, and strategy. This physics-based game challenges you to
              navigate a falling ball through dynamic obstacles, tricky paths,
              and unpredictable platforms, all leading to the ultimate
              goal—landing in the basket!
            </p>
            <br />
            <h4>🎮 Simple Yet Challenging Gameplay</h4>
            <p>
              With a single tap, you control the ball’s jumps, but mastering the
              perfect jump timing requires skill and practice. Plan your jumps
              carefully to avoid spikes, gaps, and moving obstacles that stand
              between you and victory!
            </p>
            <br />
            <h4>🧩 Features That Keep You Hooked</h4>
            <p>
              ✅ Minimal & Addictive Gameplay – Easy to learn, but tough to
              master!
            </p>
            <p>
              ✅ Physics-Based Challenges – Realistic movement adds an extra
              layer of fun and difficulty.
            </p>
            <p>
              ✅ Unique Levels – Each level presents new obstacles and mechanics
              to keep the gameplay fresh.
            </p>
            <p>
              ✅ One-Tap Control – Simple but effective mechanics that make
              every move count.
            </p>
            <p>
              ✅ Smooth Animations & Responsive Gameplay – Enjoy a seamless
              gaming experience with optimized performance.
            </p>
            <p>
              ✅ Casual & Relaxing Yet Exciting – A perfect balance between
              relaxation and challenge!
            </p>
            <br />
            <h4>🏆 How to Play</h4>
            <p>Time your jumps to avoid obstacles and reach the basket.</p>
            <br />
            <p>
              Whether you're looking for a quick game to pass the time or a
              challenging puzzle to sharpen your reflexes, Basket Rush delivers
              an enjoyable experience for players of all skill levels. Download
              now and start rolling your way to victory!
            </p>
          </ProjectDescription>
        </div>
        <Footer />
      </div>
    </>
  )
}

type DownloadLink = {
  store: 'Play Store' | 'Itch.IO' | 'Steam'
  link: string
}
type ProjectHeader = {
  title: string
  Icon: string
  shortDescription: string
  downloadLinks: DownloadLink[]
}

export function ProjectsHeader({
  title,
  Icon,
  shortDescription,
  downloadLinks
}: ProjectHeader) {
  return (
    <>
      <div className="w-full flex px-1 mt-4">
        <img src={Icon} className="h-24 sm:h-32 rounded-md" />
        <div className="ml-2 flex flex-col w-full">
          <h2 className="text-2xl sm:text-3xl flex items-center mb-[2px] font-bold text-gray-title dark:text-white-title">
            {title}
          </h2>
          <p className="text-sm sm:text-lg text-gray-text dark:text-white-text">
            {shortDescription}
          </p>
          <div className="mt-auto">
            <p className="italic text-sm text-gray-text dark:text-white-text flex items-center">
              Download:{' '}
              {downloadLinks.map(data => {
                let downloadIcon = null

                if (data.store === 'Play Store') {
                  downloadIcon = <FaGooglePlay className="text-lg ml-2" />
                } else if (data.store === 'Itch.IO') {
                  downloadIcon = <FaItchIo className="text-lg ml-2" />
                } else if (data.store === 'Steam') {
                  downloadIcon = <FaSteam className="text-lg ml-2" />
                }

                return (
                  <a href={data.link} target="_blank">
                    {downloadIcon}
                  </a>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export function ProjectScreenshots({ images }: { images: string[] }) {
  return (
    <div className="w-full max-w-full min-w-full overflow-hidden px-1 sm:px-0">
      <h2 className="text-gray-text dark:text-white-text font-semibold mt-4 px-1 sm:px-0">
        Screenshots
      </h2>
      <Carousel
        arrows
        swipeable
        showDots
        infinite={false}
        additionalTransfrom={0}
        containerClass="py-4"
        itemClass="px-2"
        slidesToSlide={1}
        renderButtonGroupOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full max-w-[300px] h-auto mx-auto rounded-md object-contain"
          />
        ))}
      </Carousel>
    </div>
  )
}

export function ProjectDescription({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mt-4 mb-4 px-2 sm:px-0">
        <h2 className="text-gray-text dark:text-white-text font-semibold mt-4 mb-2">
          Description
        </h2>
        <div className="text-gray-text dark:text-white-text text-sm sm:text-base">
          {children}
        </div>
      </div>
    </>
  )
}
