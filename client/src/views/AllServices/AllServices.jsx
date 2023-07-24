import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"


const AllServices = () => {

  return (
    <>
        <Navbar />
        <div className="flex flex-row flex-wrap h-screen w-max-[50%] items-center justify-center border border-white gap-2 py-5">
            <Card />
        </div>
    </>
  )
}

export default AllServices