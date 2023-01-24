import { createContext, useState } from "react"
import { API_URL } from "@env"

export const store = createContext();

export const AppContext = ({ children }) => {
  const [input, setInput] = useState("")
	const [products, setProducts] = useState([])
	const [showSpinner, setShowSpinner] = useState(false)
  const [filterBtn, setfilterBtn] = useState("all")

  const handleProductTypes = data => {
    const filteredProduct = data.filter(item => {
      if (filterBtn === "all") return true
      const productsByType = item.category === filterBtn

      return productsByType
    })
    return filteredProduct
  }

  const getProducts = async () => {
    try {
      setShowSpinner(true)
      const data = await fetch(API_URL)
      const results = await data.json()

      const dataToShow = handleProductTypes(results)

      setProducts(dataToShow)
      setShowSpinner(false)
    } catch (error) {
      console.log("Error on getProducts: ", error)
    }
	}

  const handleSearch = (input) => {
    setShowSpinner(true)
    const query = input?.trim().toLowerCase()
		if (!query) return getProducts()

    const searchedProdutcs = products.filter(item => {
      const itemName = item?.title?.toLowerCase().trim()
      return itemName?.includes(query)
    })
    setProducts(searchedProdutcs)
    setShowSpinner(false)
	}

  const INITIAL_STATE = {
    input,
    products,
    filterBtn,
    showSpinner
  }

  const setState = () => {
    return {
      setInput,
      handleProductTypes,
      getProducts,
      setfilterBtn,
      setProducts,
      handleSearch
    }
  }

  const state = {
    ...INITIAL_STATE,
    effects: {
      ...setState()
    }
  }
  return <store.Provider value={state}>{children}</store.Provider>
}