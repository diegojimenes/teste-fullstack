import { AxiosInstance } from "axios";
import json from "../utils/data.json"

interface products {
  "name": string,
  "image_url": string,
  "type":  "Camiseta" | "Regata" | "Calção" | "Acessório"
  "price": number,
  "seller": string,
  "available_sizes": Array<string>,
  "details": string,
  "sport": "Basquete" | "Futebol" | "Corrida"
}

export const getProducts = (axios: AxiosInstance) => (): Array<products> => {
    // Mocked Data
    return json as Array<products>
}