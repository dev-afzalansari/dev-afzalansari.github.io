import { Link } from "react-router-dom"

export default function Projects() {

    return (
      <>
        <div className="h-full w-full flex align-center border-2 justify-center">
          <h1 className="text-xl font-bold text-red">Projects</h1>
          <Link to='/projects/simple-journal'>Simple Journal</Link>
        </div>
      </>
    )
  }
  