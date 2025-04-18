import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function BasketRush() {
  return (
    <>
      <Helmet>
        <title>Projects | Basket Rush</title>
      </Helmet>
      <div className="flex-grow flex flex-col">
        <Header />
        <h1 className="text-xl font-bold text-red">Basket Rush</h1>
        <a href="/projects/basket-rush/privacy-policy.html">Privacy Policy</a>
        <Footer />
      </div>
    </>
  )
}
