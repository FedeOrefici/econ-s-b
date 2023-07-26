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

      <div onClick={handleOpen} className="flex items-center justify-center gap-4 px-4 py-4 bg-gray-50 w-[250px] h-[50px] cursor-pointer">
        <p className="text-gray-900">{user?.name}</p>
        <div className="flex text-gray-900">
            <span class="material-symbols-outlined">account_circle</span>
            {openOptions ? (<div className="bg-white text-center w-[250px] top-[75px] left-[1248px] absolute">
              <ul className="py-2 flex flex-col items-center justify-center shadow-lg bg-slate-100">
                <NavLink to='/createService' className="py-2 hover:bg-gray-300 w-full">Create Service</NavLink>
                <NavLink to='/myServices' className="py-2 hover:bg-gray-300 w-full">My services</NavLink>
                <NavLink onClick={logoutClean} className="py-2 hover:bg-gray-300 w-full flex items-center justify-center gap-4">
                  <span class="material-symbols-outlined">logout</span>
                  <p>logout</p>
                </NavLink>
              </ul>
            </div>) : null}
        </div>
    </div>
  )
}

export default UserProfile