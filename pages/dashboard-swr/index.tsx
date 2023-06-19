import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fetcher = async () => {
    let res = await axios.get("http://localhost:4000/dashboard")
    return res.data
}

function DashBoardUsingSWR() {
    const { data, error } = useSWR('dashboard', fetcher)

    if(error) return <h1>There is an error in data Fetching</h1>
    if(!data) return <h1>Loading...</h1>
    return (
        <div>
            <h1>Dashboard Details</h1>
            <h3>Post - {data.posts}</h3>
            <h3>Like - {data.likes}</h3>
            <h3>Followers - {data.followers}</h3>
            <h3>Following - {data.following}</h3>
        </div>
    )
}

export default DashBoardUsingSWR