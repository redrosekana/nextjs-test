import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import FileBase64 from 'react-file-base64'
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Baseandalert() {
  const img = useRef()
  const [startDate, setStartDate] = useState(new Date());
  
  /* ฟังชันก์ของแปลงไฟล์เป็น base64 */
  function getFiles(ev){
    // ได้ค่าเป็นข้อมูลที่ต้องมาแงะเอาเอง ถ้ามีหลายรูปภาพ ก็จะเป็น array หลายตัว
    console.log(ev)
    ev.forEach(e => {
      console.log(e)  
      img.current.src = e.base64
    })
  }
  
  function alert(){
    /* ลองใช้ sweet alert ดู */
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  
  function changeDate(ev){
    // ได้ค่าออกมาเหมือนกับ new Date เลย ลองเทียบกันดู
    console.log(ev)
    console.log(new Date())
    setStartDate(ev)
  }

  return (
    <>
      <div className='container p-5 border'>
        
          {/* มี multiple ไว้กำหนดส่งได้หลายไฟล์ มี onDone ไว้กำหนดฟังชันก์ */}
          <FileBase64  
          className="form-control" 
          multiple={true} 
          onDone={(ev) => getFiles(ev)} 
          name="file"
          />
          
          {/* วัน เดือน ปี  selected เหมือนการกำหนดค่าเริ่มต้น*/}
          <DatePicker  
          className='form-control mt-2' 
          selected={startDate} 
          onChange={(ev) => changeDate(ev)}
          name="date"
          />
          
          <div className='mt-2'>
            <button className='btn btn-danger' onClick={alert}>กด</button>
          </div>

        <div className='w-50 mt-3'>
          <img ref={img} className="img-fluid"/>
        </div>
      </div>
    </>
  )
}
 
 
