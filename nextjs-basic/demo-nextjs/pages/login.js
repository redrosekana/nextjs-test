import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'


export default function Login() {
    const form = useRef()
    const router = useRouter()
    
    async function submitForm(ev){
        const cookie = new Cookies()
        ev.preventDefault()
        const response = await axios.post("http://127.0.0.1:8000/login",{
            "username":form.current.elements[0].value,
            "school":form.current.elements[1].value
        })
        
        const token = response.data.token
        if (token === "hw"){
            cookie.set("token",token,{path:'/'})
            router.push(`/school/${token}`)
        }else if (token === "sk"){
            cookie.set("token",token,{path:'/'})
            router.push(`/school/${token}`)
        }else{
            alert("รหัสผ่านไม่ถูกต้อง")
        }
    }
    
    return (
    <div className='container p-5'>
        <style jsx>{`
            #form-user{
                max-width:800px;
                margin: 0 auto;
                padding:2rem;
            }
        `}</style>
        
        <form id='form-user' onSubmit={(ev) => submitForm(ev)} ref={form}>
            <div className='form-floating'>
                <input type="text" className='form-control' placeholder='username'/>
                <label className='form-label'>username</label>
            </div>
            <div className='form-floating mt-2'>
                <input type="text" className='form-control' placeholder='school'/>
                <label className='form-label'>school</label>
            </div>
            <button className='btn btn-danger mt-3'>เข้าสู่ระบบ</button>
        </form>
    </div>
  )
}