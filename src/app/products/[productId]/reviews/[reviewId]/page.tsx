function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReview({
  params
}: { 
  params: { 
    productId: string, 
    reviewId: string 
  }
}) {
  const { productId, reviewId } = params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review")
  }

  return (
    <div>
      <h1>Product Review Page</h1>
      <p>This is the review {reviewId} for product {productId}.</p>
    </div>
  )
}