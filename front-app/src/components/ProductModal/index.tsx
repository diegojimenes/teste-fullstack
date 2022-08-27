import { Button, Col, Figure, Modal, Row } from "react-bootstrap"
import { BagPlus } from 'react-bootstrap-icons';
import { Iproducts } from "../../api/getProducts"
import "./styles.css"

interface IProductModal extends Iproducts {
  isOpen: boolean
  toggle: () => void
}

const ProductModal: React.FC<React.PropsWithChildren<IProductModal>> = ({
  children,
  isOpen,
  toggle,
  name,
  image_url,
  details,
  price
}) => {
  return <div className="product-modal">
    {
      children
    }

    <Modal show={isOpen} onHide={toggle} size="lg">
      <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg="8">
            <p>
              {details}
            </p>
            <span className="price">
              {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </Col>
          <Col lg="4">
            <Figure>
              <Figure.Image
                width={300}
                src={image_url}
              />
            </Figure>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggle}>
          Add Cart <BagPlus className="buttom" />
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
}

export default ProductModal
