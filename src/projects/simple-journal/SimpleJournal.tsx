import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SimpleJournal() {
  return (
    <>
      <Helmet>
        <title>Projects | Simple Journal</title>
      </Helmet>
      <div className="flex-grow flex flex-col">
        <Header />
        <h1 className="text-xl font-bold text-red">Simple Journal</h1>
        <a href="/projects/simple-journal/privacy-policy.html">
          Privacy Policy
        </a>
        <Footer />
      </div>
    </>
  )
}
