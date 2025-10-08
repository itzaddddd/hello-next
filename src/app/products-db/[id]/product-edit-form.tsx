"use client"

import { Submit } from "@/components/submit"
import { FormState, editProduct } from "@/actions/products"
import { useActionState } from "react"
import { Product } from "@/app/products-db/page"

export const EditProductForm = ({ product }: { product: Product }) => {
  const initialState: FormState = {
    errors: {}
  }

  const editProductWithId = editProduct.bind(null, product.id)

  const [state, formAction, isPending] = useActionState(editProductWithId, initialState)

  return (
    <form action={formAction}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={product.title}
        />
        {state.errors.title && <p>{state.errors.title}</p>}
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          name="price"
          defaultValue={product.price}
        />
        {state.errors.price && <p>{state.errors.price}</p>}
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          defaultValue={product.description ?? ""}
        />
        {state.errors.description && <p>{state.errors.description}</p>}
      </div>
      <Submit />
    </form>
  ) 
}