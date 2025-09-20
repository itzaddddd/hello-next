import Link from "next/link";

export default function F2() {
  return (
    <>
      <h1>F2 page</h1>
      <Link href="/f4">F4</Link>
      <Link href="/f1/f2/inner-f2">Inner F2</Link>
    </>
  )
}