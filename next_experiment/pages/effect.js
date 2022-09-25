import React from "react"
import { useState,useEffect} from "react"

export default function Effect() {
  const [check1,setCheck1] = useState(true)
  const [check2,setCheck2] = useState(false)
  
    /* 
    1. สังเกตุว่าการใช้ useEffect จะทำหลังจากที่ render แล้ว 1 ครั้ง แล้วค่อยมาทำ useEffect
    2. สามารถกำหนด useState ได้หลายรอบขึ้น (กี่รอบก็ได้) อยู่กับการเลือกว่าจะใช้เปลี่ยน state ใดแล้วมาทำ useEffect หรือจะทำเฉพาะครั้งแรกก็ได้
    
    */ 
    useEffect(() => {
        console.log("useEffect นี้เฉพาะการ render ครั้งแรกเท่านั้น 1")
    },[])

    useEffect(() => {
        console.log("useEffect นี้เฉพาะการ render ครั้งแรกเท่านั้น 2")
    },[])

    useEffect(() => {
        console.log("render ครั้งแรกเท่านั้น และ useEffect นี้เฉพาะการ state check1 เปลี่ยนเท่านั้น 1")
    },[check1])

    useEffect(() => {
        console.log("render ครั้งแรกเท่านั้น และ useEffect นี้เฉพาะการ state check1 เปลี่ยนเท่านั้น 2")
    },[check1])

    useEffect(() => {
        console.log("render ครั้งแรกเท่านั้น และ useEffect นี้เฉพาะการ state check2 เปลี่ยนเท่านั้น 1")
    },[check2])

    useEffect(() => {
        console.log("render ครั้งแรกเท่านั้น และ useEffect นี้เฉพาะการ state check2 เปลี่ยนเท่านั้น 2")
    },[check2])
  
  console.log("re-render")
  
  return (
    <div className="container p-5 text-center">
      {/* ถ้า state เป็น boolean สามารถกำหนดท่าแบบนี้ได้ แบบนี้ในฟังชันก์ได้ ถ้าต้องการให้มัน toggle สลับกันไป สะดวกมากๆ */}
      <button className="btn btn-danger" onClick={()=> setCheck1(prevState=>!prevState)}>กด1</button>
      <button className="btn btn-danger ms-2" onClick={()=> setCheck2(prevState=>!prevState)}>กด2</button>
      <p>{`${check1}`} {`${check2}`}</p>
    </div>
  )
}
