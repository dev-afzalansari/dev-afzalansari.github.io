import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function BasketRush() {

    return (
      <>
        <Helmet>
          <title>Projects | Basket Rush</title>
        </Helmet>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl font-bold text-red">Basket Rush</h1>
          <Link to='/projects/basket-rush/privacy-policy'>Privacy Policy</Link>
        </div>
      </>
    )
  }
  