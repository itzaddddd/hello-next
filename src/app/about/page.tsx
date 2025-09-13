import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "About Us"
  }
}

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing the best services to our customers.</p>
      <h2>
        <Link href="/">
          Home
        </Link>
      </h2>
    </div>
  )
}