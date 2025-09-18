function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params
}: { 
  params: Promise<{ 
    productId: string, 
    reviewId: string 
  }>
}) {
  const { productId, reviewId } = await params;

  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review")
  // }


  return (
    <div>
      <h1>Product Review Page</h1>
      <p>This is the review {reviewId} for product {productId}.</p>
    </div>
  )
}