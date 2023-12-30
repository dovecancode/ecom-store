import axios from 'axios'

class ProductServices {
  #httpInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  })

  async getHomeProducts(limit) {
    const res = await this.#httpInstance.get(`/products/?limit=${limit}`)
    return res.data
  }

  async getAllShopProducts() {
    const res = await this.#httpInstance.get(`/products`)
    return res.data
  }

  // calling category names and category products at the same time and created an new object from it
  async getCategories() {
    // call category name first
    const { data: catNames } = await this.#httpInstance.get(
      `/products/categories`
    )

    // call specific category in a loop
    const categoryRequests = await catNames.map(async (name) => {
      const categoryData = await this.#httpInstance.get(
        `/products/category/${name}`
      )
      // created an new object from this api call {catname, catLength}
      return { catName: name, catLength: categoryData.data.length }
    })

    return await Promise.all(categoryRequests)
  }

  async getCategoryProducts(cat) {
    const res = await this.#httpInstance.get(`/products/category/${cat}`)
    return res.data
  }

  async getSingleProduct(id) {
    const res = await this.#httpInstance.get(`/products/${id}`)
    return res.data
  }
}

export default new ProductServices()
