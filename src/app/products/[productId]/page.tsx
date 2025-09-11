export default function Product({ params }: { params: { productId: string }}) {
  return (
    <div>
      <h1>Product Details for id {params.productId}</h1>
      <p>This is the defail page for proudct</p>
    </div>
  )
}