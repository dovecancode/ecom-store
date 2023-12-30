import axios from 'axios'

class ProductServices {
  #httpInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  })

  async getAllShopProducts() {
    const res = await this.#httpInstance.get(`/products`)
    return res.data
  }

  // async getCategoryTitle() {
  //   const res = await this.#httpInstance.get(`/products/categories`)
  //   return res.data
  // }

  // async getCategory(cat) {
  //   const res = await this.#httpInstance.get(`/products/category/${cat}`)
  //   return res.data
  // }

  // calling category names and category products at the same time
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
}

export default new ProductServices()
