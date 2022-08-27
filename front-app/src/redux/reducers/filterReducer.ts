import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterNames, Ifilters } from '../../pages/ProductsList'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    tipos: [] as Array<string>,
    marcas: [] as Array<string>,
    tamanhos: [] as Array<string>,
    esportes: [] as Array<string>,
    name: ""
  },
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: FilterNames, value: string }>) => {
      const { filter, value } = action.payload
      if (filter === "name") {
        state.name = value
      } else if (!state[filter].includes(value)) {
        state[filter] = [...state[filter], value]
      } else {
        state[filter] = state[filter].filter((x) => {
          return x != value
        })
      }
    },
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer