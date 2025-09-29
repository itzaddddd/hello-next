export const Review = async () => {
  await new Promise(resolve => setTimeout(resolve, 4000))
  
  return (
    <div>
      <h1>Many reviews</h1>
    </div>
  )
}