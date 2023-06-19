import React from 'react'
import { Inews } from '.'
import axios from 'axios'

function CategoryBasedNews({ news }: { news: Inews[] }) {
    return (
        <>
            <h1>News Article List</h1>
            {news.map((news) => {
                return (
                    <>
                        <h2>{news.id} {news.title} {news.category}</h2>
                        <p>{news.description}</p>
                    </>
                )
            })}
        </>
    )
}

export default CategoryBasedNews

export async function getServerSideProps({ params }: { params: any }) {
    let data
    let res = await axios.get(`http://localhost:4000/news?category=${params.category}`)
    data = res.data

    return {
        props: {
            news: data
        }
    }
}