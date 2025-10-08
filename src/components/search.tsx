import Form from "next/form";

export const Search = () => {
  return (
    <Form action="/products-db">
      <input 
        name="query"
        placeholder="Search products"
      />
      <button
        type="submit"
      >
        Submit
      </button>
    </Form>
  )
}