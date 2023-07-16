import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import back from '../assets/backhome.jpg'


const App = () => {

  return (
    <div className="relative min-h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${back})`}}>
      <div>
        <Navbar />
        <p className="text-white">App banner presentation</p>
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App