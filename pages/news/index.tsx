import axios from 'axios'
import React from 'react'

export interface Inews {
    id: number
    title: string
    description: String
    category: String
}

function NewsArticleList({ news }: { news: Inews[] }) {
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

export default NewsArticleList

export async function getServerSideProps() {
    let data
    let res = await axios.get("http://localhost:4000/news")
    data = res.data

    return {
        props: {
            news: data
        }
    }
}