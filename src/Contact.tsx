import { Helmet } from 'react-helmet'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari | Contact</title>
      </Helmet>
      <Header />
      <div className="flex-grow flex flex-col">
        <h1>Contact</h1>
        <Footer />
      </div>
    </>
  )
}
