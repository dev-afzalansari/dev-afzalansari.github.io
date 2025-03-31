import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"


export default function Home() {

    return (
      <>
        <Helmet>
          <title>Afzal Ansari</title>
        </Helmet>
        <div className="h-full w-full flex justify-center">
          <div className="max-w-3xl w-[768px] pl-2">
            <h1 className="text-4xl mt-4 mb-2">Afzal Ansari</h1>
            <p>I am a Developer.</p>
            <p>Browse my <Link to='/projects'>Projects</Link></p>

            <p>Connect with me on <a href="https://x.com/afzalansari_dev" >X</a>.</p>
          </div>
        </div>
      </>
    )
  }
  