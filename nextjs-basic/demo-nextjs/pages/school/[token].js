import React from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
import Cookies from 'universal-cookie'

export default function Tk() {
    const cookie = new Cookies()
    const router = useRouter()
    
    useEffect(()=>{
      console.log(router.query)
      let path = router.query.token
      
      if (!(cookie.get("token") === path)){
        router.replace("/login")
      }
    },[])
    
    return (
      <div className='container p-5 text-center'>
          <p className='display-2'>hello user from {router.query.token}</p>
      </div>
    )
}

// รับ context มาจาก getStaticPaths() 
export async function getStaticProps(context) {
  //console.log(context)
  return {
    props: {}
  }
}

// ทำการ ใส่ค่า fix ของ path ไว้ใน params เมื่อทำการกำหนด path ตรงตามที่กำหนดใน params
export async function getStaticPaths() {
  const path = [
    {params:{token:'hw'}},{params:{token:'sk'}}
  ]
  return {
    paths:path,
    fallback: false,
  }
}


