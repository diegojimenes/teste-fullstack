import { Iproducts } from "../../api/getProducts"
import { Ifilters } from "../../pages/ProductsList"

const filterFactory = (products: Iproducts[]) => products.reduce((acc, { type, seller, available_sizes, sport }) => {
  return {
    tipos: [...new Set([...acc.tipos, type])],
    marcas: [...new Set([...acc.marcas, seller])],
    tamanhos: [...new Set([...acc.tamanhos, ...available_sizes])],
    esportes: [...new Set([...acc.esportes, sport])],
    name: ""
  }
}, {
  tipos: [],
  marcas: [],
  tamanhos: [],
  esportes: [],
  name: ""
} as Ifilters)

export default filterFactory