import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export default function Picture() {
  const [picture,setPicture] = useState("/image/fish.jpg")
  const [display,setDisplay] = useState("don't change picture")

  function upfile(ev){
    console.log(ev.target.files[0])
    
    // ใช้ FileReader ในการอ่านไฟล์
    const reader = new FileReader()
    reader.readAsDataURL(ev.target.files[0])
    setDisplay("change picture success")

  // เมื่อทำการอ่านข้อมูลสำเร็จให้จะเกิด event นี้และได้ค่าที่อ่านมาเป็น base64
    reader.onload = (ev) => {
      const jp = ev.target.result;
      setPicture(jp)
    }
  }

  return (
    <div className='container border p-5'>
        {/* Image ของ next */}
        {/* ตอนกำหนด path ใน public สำหรับ Image ไม่ต้องมี . กำหนดแบบนี้"/image/fish.jpg" */}
        <Image
          src={picture}
          alt="Picture of the author"
          width={300}
          height={300}
          layout="intrinsic"
        />
        
        {/* img ปกติของ html */}
        {/* <img 
          src={picture}
         className='img-fluid' 
         width="300px"
         height="300px"
        /> */}
        
        <p>{display}</p>
        <input type="file" 
        className='form-control mt-3' 
        onChange={(ev) => upfile(ev)}
      />
    </div>
  )
}
