"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description })
      });

      if (response.ok) {
        router.push("/products-db")
      }

    } catch (e) {
      console.error("Error:", e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        onChange={e => setTitle(e.target.value)}
      />

      <label>Price</label>
      <input
        type="text"
        name="price"
        onChange={e => setPrice(e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        name="descriptio"
        onChange={e => setDescription(e.target.value)}
      />
      <button 
        type="submit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  ) 
}
