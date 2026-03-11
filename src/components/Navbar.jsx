import {Link} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

function Navbar() {
  return (
    <div>
        <h1>Movie Lib TMDB</h1>
            <nav id="navbar">
                <h2>
                    <Link to="/">
                        <BiCameraMovie /> MovieLib
                    </Link>
                </h2>
                <form>
                    <input type="text" placeholder="Busque um filme..."/>
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
    </div>
  )
}

export default Navbar
