import React from 'react'
import { useRef } from 'react'

export default function Filereader() {
    const file = useRef()
    
    /* ส่วนของการแปลง string เป็น object */
    const stringtoObject = (text) => {
        const result = []
        const tmp = text.split("\n")
        const heads = tmp[0].split(",")
        
        for (let i=1;i<tmp.length-1;i++){
            const line = tmp[i].split(",")
            const object = {}
            for (let j=0;j<heads.length;j++){
                if (line[j] === ""){
                    return "data is undefined"
                }else{
                    object[`${heads[j].trim()}`] = line[j].trim()
                }
            }
            result.push(object)
        }
        return result
    }
    
    
    /* เมื่อกดปุ่มทำการอ่านข้อมูลจากไฟล์ csv */
    const submit = (ev) => {
        ev.preventDefault();
        const fileSuccess = file.current.files[0]
        //console.log(fileSuccess)
        
        // ใช้ FileReader ในการอ่านไฟล์
        const reader = new FileReader()
        reader.readAsText(fileSuccess)

        // เมื่อทำการอ่านข้อมูลสำเร็จให้จะเกิด event นี้และได้ค่าที่อ่านมาเป็น string
        reader.onload = (ev) => {
            const text = ev.target.result;
            //console.log(text)
            const result = stringtoObject(text)
            if (result === "data is undefined"){
                alert("ใส่ข้อมูลในไฟล์ csv ไม่ครบ")
                return
            }else{
                console.log(result)
            }
        }
    }
    return (
        <div className='container p-5'>
            <form onSubmit={(ev)=> submit(ev)}>
                <input type="file" className='form-control'  ref={file}/>
                <button className='btn btn-danger mt-2'>ยืนยัน</button>
            </form>
        </div>
    )
}
