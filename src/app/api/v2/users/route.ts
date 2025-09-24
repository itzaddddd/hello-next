type UserV2 = {
  id: string
  email: string,
  fullName: string
}

export async function GET() {
  const users: UserV2[] = [
    {
      id: "1",
      email: "john@gmail.com",
      fullName: "John Smith"
    },
    {
      id: "2",
      email: "jalice@gmail.com",
      fullName: "Alice Johnson"
    }
  ]

  return Response.json(users)
}