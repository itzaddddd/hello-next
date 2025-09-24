export const dynamic = "force-static"
export const revalidate = 60

export async function GET() {
  const categories = [
    { id: 1, name: "Asia" },
    { id: 2, name: "Europe" },
    { id: 3, name: "North America" },
  ]

  return Response.json(categories)
}