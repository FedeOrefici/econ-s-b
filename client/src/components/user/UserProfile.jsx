import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


const UserProfile = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [openOptions, setOpenOptions] = useState(false)

  useEffect(() => {
    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString)
    setUser(user)
  }, [])

  const logoutClean = () => {
    setOpenOptions(false);
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login')
  }

  const handleOpen = () => {
    setOpenOptions(!openOptions)
  }
  

  return (

      <div onClick={handleOpen} className="flex items-center justify-center gap-4 px-4 py-4 bg-slate-800 border rounded w-[250px] h-[50px] cursor-pointer">
        <p className="text-lime-400">{user?.name}</p>
        <div className="flex text-lime-400">
            <span className="material-symbols-outlined">account_circle</span>
            {openOptions ? (<div className="bg-white text-center w-[243px] top-[75px] left-[1255px] absolute">
              <ul className="py-2 flex flex-col items-center justify-center bg-slate-800 border shadow-lg">
                <NavLink to='/createService' className="py-2 hover:bg-white hover:text-slate-800 w-full">Create Service</NavLink>
                <NavLink to='/myServices' className="py-2 hover:bg-white hover:text-slate-800 w-full">My services</NavLink>
                <NavLink onClick={logoutClean} className="py-2 hover:bg-white hover:text-slate-800 w-full flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined">logout</span>
                  <p>logout</p>
                </NavLink>
              </ul>
            </div>) : null}
        </div>
    </div>
  )
}

export default UserProfile