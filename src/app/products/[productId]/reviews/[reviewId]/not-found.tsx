"use client"

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathName = usePathname();
  const pathNames = pathName?.split('/') || [];
  const reviewId = pathNames[4];
  const productId = pathNames[2];
  return (
    <div>
      <h1>Review {reviewId} not found for product {productId}</h1>
    </div>
  )
}