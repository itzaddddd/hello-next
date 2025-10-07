"use client"

import { Submit } from "@/components/submit"
import { FormState, createProduct } from "@/actions/products"
import { useActionState } from "react"

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {}
  }

  const [state, formAction, isPending] = useActionState(createProduct, initialState)

  return (
    <form action={formAction}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
        />
        {state.errors.title && <p>{state.errors.title}</p>}
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          name="price"
        />
        {state.errors.price && <p>{state.errors.price}</p>}
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
        />
        {state.errors.description && <p>{state.errors.description}</p>}
      </div>
      <Submit />
    </form>
  ) 
}