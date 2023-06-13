import { useRouter } from 'next/router'
import React from 'react'

function productId() {
  let router = useRouter()
  let productID = router.query.productId
  return (
    <h1>Detail about Product {productID}</h1>
  )
}

export default productId