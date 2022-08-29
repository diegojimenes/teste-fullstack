import { useEffect, useMemo, useState } from "react"
import { Iproducts } from "../../api/getProducts"
import api from "../../api"
import SideBar from "../../components/SideBar"
import { Container, Row } from "react-bootstrap"
import ListProducts from "./listProducts"
import filterFactory from "../../components/utils/filterFactory"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import "./styles.css"

export type FilterNames = "tipos" | "marcas" | "tamanhos" | "esportes" | "name"

export interface Ifilters {
  tipos: Array<string>,
  marcas: Array<string>,
  tamanhos: Array<string>,
  esportes: Array<string>,
  name: string
}

const ProductsList = () => {
  const filtersState = useSelector((state: RootState) => state.filter)
  const [products, setProducts] = useState<Iproducts[]>([])
  const [filters, setFilters] = useState<Ifilters>({
    tipos: [],
    marcas: [],
    tamanhos: [],
    esportes: [],
    name: ""
  })

  const getProducts = async (filters?: Ifilters) => {
    const res = await api.products.getProducts(filters)
    setProducts(res)
    return res
  }

  useMemo(async () => {
    const res = await getProducts()
    setFilters(filterFactory(res))
  }, [])

  useEffect(() => {
    getProducts(filtersState)
  }, [filtersState])

  return <div className="container-list">
    <Row>
      <SideBar filters={filters} />
      <ListProducts products={products} />
    </Row>
  </div>
}
export default ProductsList