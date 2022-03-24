import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

function Navbar() {
    const [closeStyle,setCloseStyle] = useState(true)
    const [menuStyle, setMenuStyle] = useState(false)
    const [hover, setHover] = useState(false)
    const [menuClass,setMenuClass] = useState('links')
    const handelHover = ()=>{
        if(hover) return <Dropdown />
    }

    const menuIcon = ()=>{
        setMenuStyle(true)
        setCloseStyle(false)
        setMenuClass('links appear')
    }

    const closeIcon = ()=>{
        setMenuStyle(false)
        setCloseStyle(true)
        setMenuClass('links')
    }

    return (
        <nav>
            <div className="logo">
                <Link to='/'>Logo</Link>
            </div>
            <ul className={menuClass}>
            <li><Link to='/'>Home</Link></li>
            <li className='drop-down' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <NavLink to='/services'>Services</NavLink>
                    {handelHover()}
            </li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
            <div className="toggle">
                <i className={`fa-solid fa-bars  ${menuStyle && 'hidden' }`} onClick={menuIcon}></i>
                <i className={`fa-solid fa-xmark ${closeStyle && 'hidden' }`} onClick={closeIcon}></i>
            </div>
        </nav>
    )
}

export default Navbar