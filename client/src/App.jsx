import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Banner from "./components/banner/Banner"


const App = () => {



  return (
    <div>
        <Navbar />
        <Banner />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default App