import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"
import background from '../../../assets/backhome.jpg'

const AllServices = () => {

  return (
    <>
        <Navbar />
        <div className="flex flex-row flex-wrap h-screen w-max-[50%] items-center justify-center gap-2 py-5" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover'}}>
            <Card />
        </div>
    </>
  )
}

export default AllServices