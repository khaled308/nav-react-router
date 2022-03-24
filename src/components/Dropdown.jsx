import { Link } from 'react-router-dom'

function Dropdown() {
    return (
        <ul className="drop-down-menu">
            <li><Link to='/marketing'>Marketing</Link></li>
            <li><Link to='/consulting'>Consulting</Link></li>
            <li><Link to='/design'>Design</Link></li>
            <li><Link to='/development'>Development</Link></li>
        </ul>
    )
}

export default Dropdown