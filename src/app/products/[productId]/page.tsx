// import { Metadata } from 'next';

type props = { 
  params: Promise<{ productId: string }>
}

export async function generateStaticParams() {
  return [
    { productId: "1" },
    { productId: "2" },
    { productId: "3" }
  ]
}

// export const generateMetadata = async ({
//   params
// }: props) : Promise<Metadata> => {
//   const id = (await params).productId;

//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`IPhone ${id} details`);
//     }, 100);
//   })
//   return {
//     title: `Product ${title}`
//   }
// }

export default async function ProductPage({ params }: props) {
  const { productId } = await params;

  return (
    <div>
      <h1>Product Details for id {productId}</h1>
      <p>This is the detail page for product</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  )
}