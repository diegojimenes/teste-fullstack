import { Col } from "react-bootstrap"
import { Ifilters } from "../../pages/ProductsList"
import FilterComponent from "./FilterComponet"
import "./styles.css"

const SideBar: React.FC<{ filters: Ifilters }> = ({ filters }) => {
  return <Col sm="2" className="side-ba">
    <hr />
    <FilterComponent filters={filters} name="marcas" />
    <FilterComponent filters={filters} name="esportes" />
    <FilterComponent filters={filters} name="tamanhos" />
    <FilterComponent filters={filters} name="tipos" />
  </Col>
}

export default SideBar