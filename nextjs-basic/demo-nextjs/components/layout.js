import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'

function Layout({children}) {
    const router = useRouter()
    const clickLink = () => {
        router.push(`/posts/${Math.floor(1+Math.random()*100)}`)
    }
    /* มีการแสดง Layout ทุกครั้งที่กดปุ่ม เพราะจะแสดงทุกหน้า */
    console.log("Layout")
    
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
                <div className='container'>
                    <Link href="/"><a className='navbar-brand'>Next Js</a></Link>
                    <button className='navbar-toggler' data-bs-target="#mycollapse" data-bs-toggle="collapse">
                        <span className=' navbar-toggler-icon'></span>
                    </button>
                    <div className='navbar-collapse collapse' id='mycollapse'>
                        <ul className='navbar-nav nav-pills ms-5'>
                            <li className='nav-item'><Link href='/'><a className='nav-link me-2'><i className="fa-solid fa-house"></i> home</a></Link></li>   
                            <li className='nav-item'><Link href='/about'><a className='nav-link me-2'><i className="fa-solid fa-address-card"></i> about</a></Link></li>   
                            <li className='nav-item'><Link href='/member'><a className='nav-link me-2'><i className="fa-solid fa-people-group"></i> member</a></Link></li>   
                            <li className='nav-item'>
                                <button className='nav-link me-2' onClick={()=> clickLink()}><i className="fa-solid fa-tape"></i> posts</button>
                            </li>   
                            <li className='nav-item'><Link href={`/character`}><a className='nav-link me-2'><i className="fa-brands fa-adn"></i> character</a></Link></li>   
                            <li className='nav-item'><Link href={`/login`}><a className='nav-link me-2'><i className="fa-solid fa-arrow-right-from-bracket"></i> login</a></Link></li> 
                        </ul>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}

export default Layout;