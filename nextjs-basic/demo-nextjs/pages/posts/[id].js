import React from 'react'
import {path} from '../../components/post_id'

export default function Post(props){
  return (
    <div className='container p-5'>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  )
}

// รับ context มาจาก getStaticPaths() 
export async function getStaticProps(context) {
  const id = context.params.id
  //console.log(context)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}

// ทำการ ใส่ค่า fix ของ path ไว้ใน params เมื่อทำการกำหนด path ตรงตามที่กำหนดใน params
export async function getStaticPaths() {
  /* const url = `https://jsonplaceholder.typicode.com/posts`
  const res = await fetch(url)
  const posts = await res.json()
  const paths = posts.map((post) => {
    return {params: { id: `${post.id}` }}
  }) */
  return {
    paths:path,
    fallback: false,
  }
}



