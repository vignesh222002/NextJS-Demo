// Incremental Static Re-Genration

import React from 'react'
import { Iproduct } from '.'
import { useRouter } from 'next/router'
import axios from 'axios'

function Product({ product }: { product: Iproduct }) {
    let router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>{product.id} {product.title} {product.price}</h2>
            <p>{product.description}</p>
            <hr />
        </>
    )
}

export default Product

export async function getStaticProps({ params }: { params: any }) {
    console.log(`Regenrating Product ${params.productsId}`);
    let data
    let res = await axios.get(`http://localhost:4000/products/${params.productsId}`)
    data = res.data

    return {
        props: {
            product: data
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { productsId: "1" } }],
        fallback: true,
    }
}