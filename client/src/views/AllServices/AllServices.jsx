import { NavLink } from "react-router-dom"


const AllServices = () => {
  return (
    <div>
        <p>all services</p>
        <div>
            <ul>
                <NavLink to='/detail'>card</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default AllServices