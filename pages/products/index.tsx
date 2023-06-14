// Incremental Static Re-Genration

import axios from 'axios'
import React from 'react'

export interface Iproduct {
    id: number
    title: string,
    price: number
    description: string
}

function ProductsList({ products }: { products: Iproduct[] }) {
    return (
        <>
            <h1>List of Products</h1>
            {products.map((product: Iproduct) => {
                return (
                    <div key={product.id}>
                        <h2>{product.id} {product.title} {product.price}</h2>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ProductsList

export async function getStaticProps() {
    console.log("Generating Products List")
    let data
    let res = await axios.get("http://localhost:4000/products")
    data = res.data

    return {
        props: {
            products: data
        },
        revalidate: 10,
    }
}