import { useRouter } from 'next/router'
import React from 'react'

function ProductId() {
  let router = useRouter()
  let ProductID = router.query.ProductId
  return (
    <h1>Detail about Product {ProductID}</h1>
  )
}

export default ProductId