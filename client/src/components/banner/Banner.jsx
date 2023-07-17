import back from '../../../assets/backhome.jpg'

const Banner = () => {
  return (
    <div className="text-white w-full h-screen bg-slate-900 flex flex-col items-center"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="bg-[#E7E7E7] w-full p-10 h-[500px]">
        <p className='text-slate-950'>carrousel sobre lo que se ofrece</p>
      </div>
      <div>
        <img />
      </div>
    </div>
  )
}

export default Banner