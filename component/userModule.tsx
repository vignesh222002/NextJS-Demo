import { Iuser } from '@/pages/user'
import React from 'react'

function UserModule({ key, users }: {key: number, users: Iuser}) {
    return (
        <h2>{users.name}</h2>
    )
}

export default UserModule