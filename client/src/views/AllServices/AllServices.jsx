import { ProductContext } from "../../context/ContextProducts"
import { useContext, useEffect, useState } from "react"
import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"
import background from '../../../assets/backhome.jpg'
import ReactPaginate from 'react-paginate'
import Footer from "../../components/footer/Footer"


const AllServices = () => {

  const { products } = useContext(ProductContext)
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(0)
  const offset = currentPage * itemsPerPage
  const currenPageData = products?.slice(offset, offset + itemsPerPage)
  
  const handlePageChange = ({selected}) => {
    setCurrentPage(selected)
  }

  useEffect(() => {
    setCurrentPage(0)
  }, [products])

  return (
    <>
        <Navbar />
        <div className="flex flex-col h-auto w-max-[50%] items-center justify-center gap-2 py-5" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover'}}>
              <div className="flex flex-row flex-wrap gap-2 items-center justify-center min-h-[800px] w-2/3">
              {currenPageData?.map((product) => (
                <Card product={product} />
              ))}
              </div>
            <ReactPaginate
            className="w-full m-10 py-10 rounded text-white flex items-center justify-center gap-20"
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={Math.ceil(products?.length / itemsPerPage)}
            marginPagesDisplayed={4}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'bg-lime-500 p-2 rounded text-center hover:text-slate-900'}
            pageLinkClassName={'pagination-item'}
            previousLinkClassName={'hover:bg-lime-400 hover:text-slate-950 p-2 rounded'}
            nextLinkClassName={'hover:bg-lime-400 hover:text-slate-950 p-2 rounded'}
            breakLinkClassName={'hover:bg-red-500'}
            />
        </div>
        <Footer />
    </>
  )
}

export default AllServices