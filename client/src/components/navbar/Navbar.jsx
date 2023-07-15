import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul style={{display: 'flex', gap:'10px', listStyle:'none'}}>
            <NavLink to='/allServices'>services</NavLink>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Navbar