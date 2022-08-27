import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Bag as BagIcon } from 'react-bootstrap-icons';
import logo from '../../assets/logo.png';
import Search from '../Search';
import "./styles.css"

const Navbars = () => {
  return <Navbar bg="trasparent" expand="lg" className="nav-bar">
    <Navbar.Brand href="#home" className="brand">
      <img src={logo} alt="Logo" width={70} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="me-right nav">
        <Nav.Link href="#home">Seleção Brasileira</Nav.Link>
        <Nav.Link href="#fashionEditorial">Editorial De Moda</Nav.Link>
        <Nav.Link href="#releases">Lançamentos</Nav.Link>
        <Nav.Link href="#feminine">Feminino</Nav.Link>
        <Nav.Link href="#male">Masculino</Nav.Link>
        <Nav.Link href="#children">Infantil</Nav.Link>
        <Nav.Link href="#snkrs">SNKRS</Nav.Link>
      </Nav>
      <Search />
      <button className="cart">
        <Badge className="badge">9</Badge>
        <BagIcon />
      </button>
    </Navbar.Collapse>
  </Navbar>
}

export default Navbars