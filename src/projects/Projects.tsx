import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Afzal Ansari | Projects</title>
      </Helmet>
      <div className="flex-grow flex flex-col align-center justify-center">
        <Header />
        <h1 className="text-xl font-bold text-red">Projects</h1>
        <Link to="/projects/simple-journal">Simple Journal</Link>
        <Link to="/projects/basket-rush">Basket Rush</Link>
        <Footer />
      </div>
    </>
  )
}
