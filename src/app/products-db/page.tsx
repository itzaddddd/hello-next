import { getProducts } from "@/prisma-db"
import { removeProduct } from "@/actions/products"
import Link from "next/link"
export type Product = {
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
          <li key={product.id}>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link> ${product.price} {product.description}
            <form action={removeProduct.bind(null, product.id)}>
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}