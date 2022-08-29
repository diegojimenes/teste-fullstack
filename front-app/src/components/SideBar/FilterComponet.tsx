import { FormLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { FilterNames, Ifilters } from "../../pages/ProductsList"
import { setFilter } from "../../redux/reducers/filterReducer"
import { RootState } from "../../redux/store"
import "./styles.css"

const FilterComponent = ({ filters, name }: {
  filters: Ifilters,
  name: FilterNames
}) => {
  const dispatch = useDispatch()
  const filtersState = useSelector((state: RootState) => state.filter)

  return <>
    <FormLabel className="side-bar-title">
      {name}
    </FormLabel>
    <hr />
    <div className="filter-container">
      {
        name !== "name" ? filters[name].map((value) => {
          const wasSelected = filtersState[name].includes(value)
          return <button className={`filter ${wasSelected ? "selected" : ""}`}
            onClick={() => dispatch(setFilter({ filter: name, value }))}
          >
            {value}
          </button>
        }) : <></>
      }
    </div>
  </>
}

export default FilterComponent