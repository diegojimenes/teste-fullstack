import { useState } from "react"
import { Iproducts } from "../../api/getProducts"
import ProductItem from "../../components/ProductItem"
import ProductModal from "../../components/ProductModal"
import WraperList from "../../components/WraperList"
import "./styles.css"

const ListProducts = ({ products }: { products: Iproducts[] }) => {
  const [currentProduct, setCurrentProduct] = useState<number | undefined>()

  return <WraperList>
    {products.map((product, index) => {
      const toggleProduct = () => {
        if (currentProduct === index) {
          setCurrentProduct(undefined)
        } else {
          setCurrentProduct(index)
        }
      }
      return <ProductModal {...product} isOpen={currentProduct === index} toggle={toggleProduct}>
        <button onClick={toggleProduct} className="item-button">
          <ProductItem {...product} />
        </button>
      </ProductModal>
    })}
  </WraperList>
}

export default ListProducts