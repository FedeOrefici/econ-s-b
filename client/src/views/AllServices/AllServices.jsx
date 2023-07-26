import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"
import background from '../../../assets/backhome.jpg'
import ReactPaginate from 'react-paginate'
import { useContext, useState } from "react"
import { ProductContext } from "../../context/ContextProducts"


const AllServices = () => {

  const { products } = useContext(ProductContext)
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(0)
  const offset = currentPage * itemsPerPage
  const currenPageData = products?.slice(offset, offset + itemsPerPage)
  
  const handlePageChange = ({selected}) => {
    setCurrentPage(selected)
  }

  return (
    <>
        <Navbar />
        <div className="flex flex-col h-auto w-max-[50%] items-center justify-center gap-2 py-5 border border-red-600" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover'}}>
              <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
              {currenPageData?.map((product) => (
                <Card product={product} />
              ))}
              </div>
            
            <ReactPaginate
            className="bg-red-600 flex items-center justify-center gap-10"
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={Math.ceil(products?.length / itemsPerPage)}
            marginPagesDisplayed={4}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
        </div>
    </>
  )
}

export default AllServices