export default function ProductReview({
  params
}: { 
  params: { 
    productId: string, 
    reviewId: string 
  }
}) {
  const { productId, reviewId } = params;

  return (
    <div>
      <h1>Product Review Page</h1>
      <p>This is the review {reviewId} for product {productId}.</p>
    </div>
  )
}