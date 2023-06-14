import { useRouter } from 'next/router'
import React from 'react'

function ReviewId() {
  const router = useRouter()
  const { ProductId, ReviewId } = router.query
  return (
    <h1>Review {ReviewId} for Product {ProductId}</h1>
  )
}

export default ReviewId