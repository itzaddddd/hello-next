"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error(
  { error, reset }:
  { error: Error, reset: () => void }
) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  }

  return (
    <div>
      <h1>Something product went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  )
}