import { useEffect, useState } from "react"


const UserProfile = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString)
    setUser(user)
  }, [])




  return (

      <div className="flex items-center justify-center gap-4 px-4 py-4 bg-gray-50 w-[250px] h-[50px] cursor-pointer">
        <p className="text-gray-900">{user?.name}</p>
        <div className="flex text-gray-900">
            <span class="material-symbols-outlined">account_circle</span>
            <div className="bg-white text-center w-[250px] top-[75px] left-[674px] absolute border border-red-600 ">
              <ul className="py-2">
                <li className="py-2">Create Service</li>
                <li className="py-2">Mi services</li>
                <li className="py-2">Logout</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default UserProfile