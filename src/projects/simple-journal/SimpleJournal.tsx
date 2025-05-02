import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  ProjectDescription,
  ProjectScreenshots,
  ProjectsHeader
} from '../basket-rush/BasketRush'

import Icon from '../../../src/assets/simple-journal-icon.png'
import Screenshot1 from '../../../src/assets/simple-journal-screenshot-1.png'
import Screenshot2 from '../../../src/assets/simple-journal-screenshot-2.png'
import Screenshot3 from '../../../src/assets/simple-journal-screenshot-3.png'
import Screenshot4 from '../../../src/assets/simple-journal-screenshot-4.png'

export default function SimpleJournal() {
  return (
    <>
      <Helmet>
        <title>Projects | Simple Journal</title>
      </Helmet>
      <div className="w-full h-full flex-grow flex flex-col">
        <Header />

        <div className="flex-grow overflow-auto">
          <ProjectsHeader
            title="Simple Journal"
            Icon={Icon}
            shortDescription="A Simple Journaling App."
            downloadLinks={[
              {
                store: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.devafzalansari.simplejournal'
              }
            ]}
          />

          <ProjectScreenshots
            images={[Screenshot1, Screenshot2, Screenshot3, Screenshot4]}
          />

          <ProjectDescription>
            <p>
              Simple Journal is a simple journaling app that is designed to
              allow you to journal day by day.
            </p>
            <br />
            <p>
              You can write a journal for a day and preview or edit it by
              navigating dates in the Calendar, which stores all your journals
              in the written dates.
            </p>
            <br />
            <p>
              Simple Journal also helps you to maintain consistency with your
              journalling goals as it will let you write only for the same day's
              date, encouraging you to write every day.{' '}
            </p>
            <br />
            <p>
              The days that are missed and not written are neither writeable nor
              editable. This design is for the writers' sake to let the healthy
              journaling habit become a normal part of their lives.
            </p>
          </ProjectDescription>
        </div>

        <Footer />
      </div>
    </>
  )
}
