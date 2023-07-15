import { useContext } from "react"
import { UsersContext } from "../../context/ContextUser"


const UserProfile = () => {

    

  return (

      <div className="flex items-center justify-center gap-4 px-4 py-4 rounded bg-lime-500 w-[250px]">
        <p className="text-gray-900">userProfile</p>
        <div className="flex text-gray-900">
            <span class="material-symbols-outlined">account_circle</span>
        </div>
    </div>
  )
}

export default UserProfile