import { useEffect, useState } from "react"


const UserProfile = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString)
    setUser(user)
  }, [])




  return (

      <div className="flex items-center justify-center gap-4 px-4 py-4 rounded bg-gray-50 w-[250px] h-[50px] cursor-pointer">
        <p className="text-gray-900">{user?.name}</p>
        <div className="flex text-gray-900">
            <span class="material-symbols-outlined">account_circle</span>
        </div>
    </div>
  )
}

export default UserProfile