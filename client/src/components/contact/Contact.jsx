import back from '../../../assets/backabout.jpg'

const Contact = () => {




  return (
    <div className="flex flex-col text-slate-950 w-full h-screen gap-20 items-center justify-center bg-slate-900">
      <p className="relative right-[360px] italic font-bold text-lime-500">contact us for more information</p>
      <form className="w-1/2 h-1/2">
        <div className="flex flex-col h-[80px]">
          <input className="p-2 w-full" type="email" placeholder="email" />
          <span className="text-yellow-300 p-2">error</span>
        </div>
        <div className="flex flex-col h-[350px]">
          <textarea className="h-[300px] p-2" placeholder="mesage" />
          <span className="text-yellow-300 p-2">error</span>
        </div>
        <button className="bg-lime-400 w-[180px] py-2 rounded font-medium hover:bg-lime-500">send</button>
      </form>
    </div>
  )
}

export default Contact