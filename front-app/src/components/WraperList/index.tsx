import { Col } from "react-bootstrap"
import "./styles.css"

const WraperList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Col sm="12" lg="10" className="wraper">
    {children}
  </Col>
}

export default WraperList
