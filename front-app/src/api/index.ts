import axios from "axios";
import {getProducts} from "./getProducts"

const axiosInstance = axios.create({});

const products = {
  getProducts: getProducts(axiosInstance)
}

const api = {
  products,
}

export default api