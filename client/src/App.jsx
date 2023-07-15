import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"


const App = () => {

  return (
    <div>
      <Navbar />
      <p>App banner presentation</p>
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App