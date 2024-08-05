export type CategoryNamesTypes = {
  catName: string
  catLength?: number
}

export type ProductTypes = {
  id: number
  title: string
  price: string
  description: string
  category: string
  image: string
  quantity?: number
  rating: {
    rate: number
    count: number
  }
}
