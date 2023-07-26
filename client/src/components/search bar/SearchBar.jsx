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
    <form>
        <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-[500px] rounded p-2 h-12 text-black" type="text" placeholder="type a service..." />
        <button onClick={handleSearch} className="w-[120px] rounded py-2 bg-slate-950">search</button>
    </form>
  )
}

export default SearchBar