import axios from './axios'

class ProductServices {
  async getHomeProducts(limit) {
    const res = await axios.get(`/products/?limit=${limit}`)
    return res
  }

  async getAllShopProducts() {
    const res = await axios.get(`/products`)
    return res
  }

  // calling category names and category products at the same time and created an new object from it
  async getCategories() {
    // call category name first
    const { data: catNames } = await axios.get(`/products/categories`)

    // call specific category in a loop
    const categoryRequests = await catNames.map(async (name) => {
      const categoryData = await axios.get(`/products/category/${name}`)
      // created an new object from this api call {catname, catLength}
      return { catName: name, catLength: categoryData.data.length }
    })

    return await Promise.all(categoryRequests)
  }

  async getCategoryProducts(cat) {
    const res = await axios.get(`/products/category/${cat}`)
    return res
  }

  async getSingleProduct(id) {
    const res = await axios.get(`/products/${id}`)
    return res
  }
}

export default new ProductServices()
