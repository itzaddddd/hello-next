import { Product } from "@/components/product";
import { Review } from "@/components/review";
import { Suspense } from "react";
import Link from "next/link"

export default async function Products() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("intentional delay")
    }, 1000);
  })

  const products = [
    {
      id: 1,
      name: "Mobile"
    },
    {
      id: 2,
      name: "Notebook"
    },
    {
      id: 3,
      name: "Tablet"
    },
  ]
  
  return (
    <div>
      <h1>Our Products</h1>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={`key-${product.id}`}>
          ID: {product.id} - Name: {product.name}
        </Link>
      ))}
      <p>Explore our range of products designed to meet your needs.</p>
      <h2>
        <Link href="/">
          Home
        </Link>
      </h2>
      <h1>Product reviews</h1>
      <Suspense fallback={<p>Loading huge product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading many reviews...</p>}>
        <Review />
      </Suspense>
    </div>
  )
}