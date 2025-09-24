import { redirect } from "next/navigation"

type UserV1 = {
  id: string
  email: string
}

export async function GET() {
  redirect("/api/v2/users")
  const users: UserV1[] = [
    {
      id: "1",
      email: "john@gmail.com"
    },
    {
      id: "2",
      email: "jalice@gmail.com"
    }
  ]

  return Response.json(users)
}