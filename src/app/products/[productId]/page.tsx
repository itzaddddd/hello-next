import { Metadata } from 'next';

type props = { 
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
  params
}: props) : Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${id} details`);
    }, 100);
  })
  return {
    title: `Product ${title}`
  }
}

export default async function Product({ params }: props) {
  const { productId } = await params;

  return (
    <div>
      <h1>Product Details for id {productId}</h1>
      <p>This is the defail page for proudct</p>
    </div>
  )
}