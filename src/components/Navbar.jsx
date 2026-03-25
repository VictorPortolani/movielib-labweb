import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.search.value;

        if (!query) return;

        navigate(`/search?q=${query}`);
    }

    return (
        <div>
            <nav id="navbar">
                <h2>
                    <Link to="/">
                        <BiCameraMovie /> MovieLib
                    </Link>
                </h2>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="search"
                        placeholder="Busque um filme..." 
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar