import axios from 'axios'

class ProductServices {
  #httpInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  })

  async getAllShopProducts() {
    const res = await this.#httpInstance.get(`/products`)
    return res.data
  }

  async getCategoryTitle() {
    const res = await this.#httpInstance.get(`/products/categories`)
    return res.data
  }
}

export default new ProductServices()
