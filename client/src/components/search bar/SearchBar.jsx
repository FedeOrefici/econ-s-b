import { useContext, useState } from "react"
import { ProductContext } from '../../context/ContextProducts'


const SearchBar = () => {

  const { searchProducts } = useContext(ProductContext)  

  const [query, setQuery] = useState('')
  
  const handleSearch = (event) => {
    event.preventDefault()
    searchProducts(query);
    setQuery('')
  }

  return (
    <form className="flex items-center justify-center gap-2">
        <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-[500px] rounded p-2 h-[35px] text-black" type="text" placeholder="type a service..." />
        <button onClick={handleSearch} className="w-[140px] h-[35px] flex items-center justify-center rounded py-2 bg-lime-400 text-black hover:bg-lime-500">search</button>
    </form>
  )
}

export default SearchBar