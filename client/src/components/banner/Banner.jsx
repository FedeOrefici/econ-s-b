import back from '../../../assets/backhome.jpg'

const Banner = () => {
  return (
    <div className="text-white w-full h-screen flex flex-col items-center justify-center"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="w-1/2 p-10 h-[500px] mt-20">
        <p className='text-lime-400 text-6xl font-bold'>Online advisory services</p>
        <p className='text-3xl italic py-2'>Request your online consultation without leaving your house.</p>
      </div>
      <div>
        <img />
      </div>
    </div>
  )
}

export default Banner