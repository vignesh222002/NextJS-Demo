import axios from "axios"
import Link from "next/link"

export interface Ipost {
    userId: number
    id: number
    title: string
    body: String
}

function PostList({ posts }: { posts: Ipost[] }) {
    return (
        <>
            <h1>List of Posts</h1>
            {posts.map((post: Ipost) => {
                return (
                    <div key={post.id}>
                        <Link href={`post/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default PostList

export async function getStaticProps() {
    let data
    await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            // console.log(res)
            data = res.data
        })
    return {
        props: {
            posts: data
        }
    }
}