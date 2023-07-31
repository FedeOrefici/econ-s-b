import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios"
import back from '../../../assets/backabout.jpg'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const MyServices = () => {
  
  const navigate = useNavigate()
  const [userService, setUserService] = useState()
  const userId = localStorage.getItem('user')
  const data = JSON.parse(userId)
  
  if(userService?.products.length === 0){
    Swal.fire({
      title:'You don´t have services, please, create a new one',
      icon: 'info',
      confirmButtonText: 'Accept'
    })
    navigate('/allServices')
  }

  useEffect(() => {
    const endpoint = `http://localhost:3000/api/users/${data?._id}`
    const axiosData = async () => {
      const response = await axios.get(endpoint)
      setUserService(response.data)
    }
    axiosData()
  }, [data?._id])

  const editService = () => {
    console.log('edit');
  }

  const removeService = (_id) => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this service?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const endpoint = `http://localhost:3000/api/products/${_id}`;
          axios.delete(endpoint)
          .then(() => {
            setUserService((prevState) => ({
              ...prevState,
              products: prevState.products.filter((item) => item._id !== _id),
            }));
            Swal.fire({
              title: 'Service Deleted',
              text: 'The service has been deleted successfully!',
              icon: 'success',
              confirmButtonText: 'Accept',
            });
          });
        } catch (error) {
          console.log('error to delete', error);
        }
      }
    });
  };
  
  console.log(userService?.products,'acacacacaca');
  

  return (
    <>
    <Navbar />
    <div className="w-full h-screen flex items-center justify-center" style={{backgroundImage:`url(${back})`}}>
      <table className="border bg-slate-50">
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
              <img className="py-1text-center w-[20%] rounded-full mx-auto" src={serv.photo} />
              <td className="border p-2 text-center">{serv.name}</td>
              <td className="border p-2 text-center">{serv.description}</td>
              <td className="border p-2 text-center">{serv.price}</td>
              <button onClick={() => removeService(serv._id)} className="bg-red-600 py-2 w-[80px] rounded text-white relative bottom-4 mx-10">delete</button>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MyServices