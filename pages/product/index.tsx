import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Product() {
  let router = useRouter()
  function handler() {
    router.push("/product/1")
  }
  return (
    <>
      <h1>Product Page</h1>
      <button onClick={() => handler()}>Go To First Product</button>
    </>
  )
}

export default Product