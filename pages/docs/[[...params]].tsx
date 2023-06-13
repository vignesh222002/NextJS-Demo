import { useRouter } from 'next/router'
import React from 'react'

function Docs() {
  let router = useRouter()
  const { params = [] } = router.query
  console.log(params)
  if (params.length === 2) return <h1>Features about {params[0]} and Concepts about {params[1]}</h1>
  else if (params.length === 1) return <h1>Features Docs page about {params[0]}</h1>
  else if (params.length === 0) return <h1>Docs Home Page</h1>
}

export default Docs