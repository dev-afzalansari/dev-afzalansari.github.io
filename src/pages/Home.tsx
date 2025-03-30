import { Link } from "react-router-dom"


export default function Home() {

    return (
      <>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl">Home</h1>
          <Link to='/projects'>Projects</Link>
        </div>
      </>
    )
  }
  