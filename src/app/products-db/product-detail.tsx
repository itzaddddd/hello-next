"use client"

import { getProducts } from "@/prisma-db"
import { removeProduct } from "@/actions/products"
import Link from "next/link"
import { useOptimistic } from "react";

export type Product = {
  id: number
  title: string
  price: number
  description: string | null
}

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products, 
    (currentProducts, productId) => {
      return currentProducts.filter(product => product.id !== productId)
    }
  )

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {optimisticProducts.map((product: Product) => (
          <li key={product.id}>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link> ${product.price} {product.description}
            <form action={removeProductById.bind(null, product.id)}>
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}