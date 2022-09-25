import React from "react"
import { useState } from "react"
import axios from "axios"

export default function Home() {
  const [data,setData] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const [check1,setCheck1] = useState("check1")
  const [check2,setCheck2] = useState("check2")
  
  /* 
  1. เมื่อมีการเปลี่ยน state จะมีการ re-render ปกติ แต่จะทำคำสั่งในฟังชันก์ต่อไปจนจบ
  2. สังเกตุว่าถ้ามีการเปลี่ยน state ต่อกัน จะ re-render พร้อมกันเลยเพราะการ re-render
  จะเร็วมากถ้าวางคำสั่งเพื่อเปลี่ยน state ต่อกัน จะre-render พร้อมกัน
  3. กรณีใช้ await ต้องรอ response จากส่งมาก่อนถึงจะทำบรรทัดถัดไปได้ โดยเพราะคำสั่ง await
  */
  
  async function fetchData(){
    /* สังเกตุว่า จะทำการเปลี่ยน state รัวๆเลย อย่างไรก็ re-render แค่ครั้งเดียว */
    setIsLoading(true)
    setCheck1("yes")
    setCheck2("yes")
    setIsLoading(true)
    setIsLoading(true)
    
    /* รอ response จากส่งมาก่อนถึงจะทำบรรทัดถัดไปได้ โดยเพราะคำสั่ง await */
    const data = await axios({
      url:"https://jsonplaceholder.typicode.com/posts/1",
      method:"get",
      timeout:3000,
      })
    /* ทีนี้เมื่อมีการต้องรอ response จึงต้องรอให้ทำคำสั่งข้างบนเสร็จก่อน
      ถึงจะทำด้านล่างได้
    */
    setData(JSON.stringify(data.data,null,"\t"))
    setIsLoading(false)
  }
  
  //console.log('re-render')
  let alert = isLoading ? "waiting data" : ""
  
  return (
    <>
      <div className="container p-5 text-center">
        <h2>{check1} {check2}</h2>
        <button className="btn btn-success" onClick={fetchData}>กด</button>
      </div>
      <pre>{data}</pre>
    </>
    
  )
}
