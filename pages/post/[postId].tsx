import React from 'react'
import axios from "axios"
import { Ipost } from "."

function Post({ post }: {post : Ipost}) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    // let data : Ipost[]
    let paths
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res.data)
        paths = res.data.map((data: Ipost) => {
            return {
                params: { postId: `${data.id}` }
            }
        })
    })

    // const paths = [
    //     {
    //         params: { postId: "1" },
    //     },
    //     {
    //         params: { postId: "2" },
    //     },
    //     {
    //         params: { postId: "3" },
    //     }
    // ]
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: {params: any}) {
    // const { params } = context
    let data
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then((res) => {
        // console.log(res.data)
        data = res.data
    })
    return {
        props: {
            post: data,
        }
    }
} 