import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/product.module.css'

function Product() {
  let router = useRouter()
  function handler() {
    router.push("/product/1")
  }
  return (
    <>
      <h1 className={styles.head}>Product Page</h1>
      <button onClick={() => handler()}>Go To First Product</button>
    </>
  )
}

export default Product