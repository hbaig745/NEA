import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/local-gyms'>Local Gyms</Link>
            <Link to='book-classes'>Book classes</Link>
        </nav>
    )
}

export default Nav;