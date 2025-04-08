import { Helmet } from "react-helmet"

export default function SimpleJournal() {

    return (
      <>
        <Helmet>
          <title>Projects | Simple Journal</title>
        </Helmet>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl font-bold text-red">Simple Journal</h1>
          <a href='/projects/simple-journal/privacy-policy.html'>Privacy Policy</a>
        </div>
      </>
    )
  }
  