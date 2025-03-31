import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function SimpleJournal() {

    return (
      <>
        <Helmet>
          <title>Projects | Simple Journal</title>
        </Helmet>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl font-bold text-red">Simple Journal</h1>
          <Link to='/projects/simple-journal/privacy-policy'>Privacy Policy</Link>
        </div>
      </>
    )
  }
  