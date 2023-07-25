import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"

const MyServices = () => {
  
  const [userService, setUserService] = useState()
  const userId = localStorage.getItem('user')
  const data = JSON.parse(userId)

  useEffect(() => {
    const endpoint = `http://localhost:3000/api/users/${data?._id}`
    const axiosData = async () => {
      const response = await axios.get(endpoint)
      setUserService(response.data)
    }
    axiosData()
  }, [data?._id])




  return (
    <>
    <Navbar />
    <div className="w-full h-screen flex items-center justify-center">
      <table className="border">
        <thead className="border">
          <tr className="border bg-slate-200">
            <th className="px-2 border p-2 text-center">Photo</th>
            <th className="px-2 border p-2 text-center">Service</th>
            <th className="px-2 border p-2 text-center">description</th>
            <th className="px-2 border p-2 text-center">price</th>
            <th className="px-2 border p-2 text-center">options</th>
          </tr>
        </thead>
        <tbody className="border">
            {userService?.products.map(serv => (
            <tr className="border" key={serv._id}>
              <td className="flex items-center justify-center rounded">
                <img className="p-2 text-center" src={serv.photo} />
              </td>
              <td className="border p-2 text-center">{serv.name}</td>
              <td className="border p-2 text-center">{serv.description}</td>
              <td className="border p-2 text-center">{serv.price}</td>
              <td className="border p-2 text-center">
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MyServices