import React from 'react';
import { useEffect } from 'react';
/* import { useRef } from 'react'; */
import { useState } from 'react';


/* ลองเปลี่ยนไปใช้ state เพื่อทำความเข้าใจดู จากที่ทำใน learnserver แล้วถึง state เปลี่ยนก็ไม่หยุด
เพราะ setinterval จะทำไปตลอดจนกว่าจะเปลี่ยนเพจ */
export default function Test() {
    /* const p = useRef() */
    const [p,setP] = useState(`character is a`)
    let timer
    
    useEffect(()=>{
        showCharacter(1)

        return () => {
            showCharacter(2)
        }
    },[])
    
    const showCharacter = (e) => {
        if (e === 1){
            let i = 0
            timer = setInterval( async () => {
                const response = await fetch('http://127.0.0.1:8000/test')   
                const data = await response.text()
                /* p.current.innerText = `character is ${data}` */
                setP(`character is ${data}`)
                console.log(i++);
            }, 1000)
        }else{
            clearInterval(timer)
        }
    }
    
    return (
        <>
            <div className='container p-5 text-center'>
                {/* ref={p} */}
                <p>{p}</p>
            </div>
            <style jsx>
                {`
                    p{
                        color:black;
                        font-size:10rem;
                        background-color: rgba(154, 220, 255, 1);
                        border-radius:30px;
                    }
                    @media screen and (max-width:1500px) {
                        p{
                            font-size: 5rem;
                        }    
                    }
                    @media screen and (max-width:1000px) {
                        p{
                            font-size: 3rem;
                        }    
                    }
                    @media screen and (max-width:600px) {
                        p{
                            font-size: 2rem;
                        }    
                    }
                `}
            </style>
        </>
    )
}
