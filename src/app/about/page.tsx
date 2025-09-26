import { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "About Us"
  }
}

export default async function About() {
  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")
  console.log(theme); 
  console.log("about page server component")
  return (
    <div>
      <h1>About Us {new Date().toLocaleTimeString()}</h1>
      <p>We are a company dedicated to providing the best services to our customers.</p>
      <h2>
        <Link href="/">
          Home
        </Link>
      </h2>
    </div>
  )
}