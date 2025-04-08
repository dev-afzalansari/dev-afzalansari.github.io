import { Helmet } from "react-helmet"

export default function BasketRush() {

    return (
      <>
        <Helmet>
          <title>Projects | Basket Rush</title>
        </Helmet>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl font-bold text-red">Basket Rush</h1>
          <a href='/projects/basket-rush/privacy-policy.html'>Privacy Policy</a>
        </div>
      </>
    )
  }
  