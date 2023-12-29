import axios from 'axios'

class ProductServices {
  #httpInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  })

  async getProducts(limit) {
    const res = await this.#httpInstance.get(`/products?limit=${limit}`)
    return res.data
  }
}

export default new ProductServices()
