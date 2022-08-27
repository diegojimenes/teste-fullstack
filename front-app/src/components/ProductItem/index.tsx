import React from "react"
import { Figure } from "react-bootstrap"
import { Iproducts } from "../../api/getProducts"
import "./styles.css"

const ProductItem: React.FC<Iproducts> = ({ image_url, name, price }) => {
  return <div className="product-item">
    <Figure>
      <Figure.Image
        src={image_url}
      />
      <Figure.Caption>
        {name}
      </Figure.Caption>
      <Figure.Caption className="price">
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Figure.Caption>
    </Figure>
  </div>
}

export default ProductItem
