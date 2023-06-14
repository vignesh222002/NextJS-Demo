import UserModule from '@/component/userModule'
import axios from 'axios'
import React, { useEffect } from 'react'

export interface Iuser {
  name: string
  id: number
}

const users: Iuser[] = [
  {
    name: "Vignesh",
    id: 1
  },
  {
    name: "Wara",
    id: 2
  },{
    name: "Perumal",
    id: 3
  },
  {
    name: "Shyam",
    id: 4
  },
  {
    name: "Magesh",
    id: 5
  }
]

function UserPage() {
  useEffect(() => console.log(users), [])

  return (
    <>
    {users.map((user: Iuser) => <UserModule key={user.id} users={user} />)}
    </>
  )
}

export default UserPage

// export async function getStaticProps() {
//   let data
//   await axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => {
//       data = res.data
//     })

//   return {
//     props: {
//       users: data
//     }
//   }
// }