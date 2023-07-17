import { useContext } from "react"
import { UsersContext } from "../../context/ContextUser"


const UserProfile = () => {


  return (

      <div className="flex items-center justify-center gap-4 px-4 py-4 rounded bg-gray-50 w-[250px] h-[50px] cursor-pointer">
        <p className="text-gray-900">userProfile</p>
        <div className="flex text-gray-900">
            <span class="material-symbols-outlined">account_circle</span>
        </div>
    </div>
  )
}

export default UserProfile