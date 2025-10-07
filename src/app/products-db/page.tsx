import { getProducts } from "@/prisma-db"

type Product = {
  id: number
  title: string
  price: number
  description: string | null
}

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts()
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>{product.title} ${product.price} {product.description}</li>
        ))}
      </ul>
    </div>
  )
}