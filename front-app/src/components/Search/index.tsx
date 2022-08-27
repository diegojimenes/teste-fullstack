import { InputGroup, FormControl } from 'react-bootstrap';
import { Search as SearchIcon, } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/reducers/filterReducer';
import "./styles.css"

const Search = () => {
  const dispatch = useDispatch()
  return <InputGroup className="input-group hide-sm">
    <FormControl
      type="text"
      placeholder="Search..."
      className="form-control"
      onChange={(event) => dispatch(setFilter({ filter: "name", value: event.target.value }))}
    />
    <div className="form-icon">
      <SearchIcon />
    </div>
  </InputGroup>
}

export default Search