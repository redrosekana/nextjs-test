import React from 'react'
import Link from 'next/link'


export default function index({query}) {
  return (
    <div className='container text-center'>
      <p>userId = {query}</p>
      <Link href={`/${query}/list/student`}><a>click</a></Link>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: '1' } }, 
      { params: { userId: '2' } },
      { params: { userId: '3' } },
      { params: { userId: '4' } },
      { params: { userId: '5' } },
    ]
    ,
    fallback: false,
  }
}


export async function getStaticProps(context) {
  const query = context.params.userId
  
  return {
    props: { query },
  }
}