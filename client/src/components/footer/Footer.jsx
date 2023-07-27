
const Footer = () => {
  return (
    <div className="bg-slate-50 h-[300px] flex items-center justify-center">
      <div className="flex items-center justify-around w-full ">
        <div className="flex items-center justify-center gap-10">
          <span class="material-symbols-outlined">groups</span>
          <p>site by <span className="italic">Federico Orefici</span></p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <span className="font-medium">Econ |</span>
          <span className="italic">asesorias</span>
          <span>| 2023</span>
        </div>
      </div>
    </div>
  )
}

export default Footer