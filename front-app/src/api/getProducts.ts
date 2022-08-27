import { AxiosInstance } from "axios";
import { Ifilters } from "../pages/ProductsList";
import json from "../utils/data.json"

export interface Iproducts {
  "name": string,
  "image_url": string,
  "type": "Camiseta" | "Regata" | "Calção" | "Acessório"
  "price": number,
  "seller": string,
  "available_sizes": Array<string>,
  "details": string,
  "sport": "Basquete" | "Futebol" | "Corrida"
}

export const getProducts = (axios: AxiosInstance) => async (filters?: Ifilters): Promise<Iproducts[]> => {
  // Mocked Data
  if (filters?.name.length ||
    filters?.tipos.length ||
    filters?.marcas.length ||
    filters?.tamanhos.length ||
    filters?.esportes.length) {
    return (json as Iproducts[]).filter(({
      type,
      seller,
      sport,
      available_sizes,
      name
    }) => {
      const verifySizes = available_sizes.reduce((acc, size) => {
        if (acc) {
          return true
        }
        return filters?.tamanhos.includes(size)
      }, false)

      return (filters.tipos.length &&
        filters.tipos.includes(type)) || (
          filters.name.length &&
          (name.toLowerCase()).includes(filters.name)) || (
          filters.marcas.length &&
          filters.marcas.includes(seller)) || (
          filters.tamanhos.length &&
          verifySizes) || (
          filters.esportes.length &&
          filters.esportes.includes(sport))

    })
  } else {
    return json as Iproducts[]
  }
}

// filters.tamanhos.includes(available_sizes)