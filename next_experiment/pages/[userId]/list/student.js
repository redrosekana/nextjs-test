import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function student() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div className='container p-3 text-center'>
      <p>student</p>
      <Link href={`/${router.query.userId}/room`}><a>click</a></Link>
    </div>

  )
}
