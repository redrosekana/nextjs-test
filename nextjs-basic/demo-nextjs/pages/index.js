import React from 'react';

export default function Home() {
  /* internal style แบบ react */
  const fontbg = {
    backgroundColor:"rgb(237, 236, 236)",
    borderRadius:"20px",
    cursor:"pointer"
  }
  return (
    <>
      {/* internal style แบบ nextjs jsx */}
      <style jsx>{`
        img{
          width:200px;
          height:150px;
          border-radius:50%
        }
        .content-cake{
          font-size:28px;
          text-align:center;
          margin-top:1rem;
        }
      `}</style>
      
      <main className='container p-4 mt-5'>
        <div className='row'>
            <div className='col-lg-4'>
              <img src='./cake1.jpg' className='mx-auto d-block img-fluid'/>
              <p className='content-cake' style={fontbg}> เค้กช็อคโกแลต</p>
            </div>
            <div className='col-lg-4'>
              <img src='/cake2.jpg' className='mx-auto d-block img-fluid'/>
              <p className='content-cake' style={fontbg}> เค้กครีมเนยสด</p>
            </div>
            <div className='col-lg-4'>
              <img src='/cake3.jpg' className='mx-auto d-block img-fluid'/>
              <p className='content-cake' style={fontbg}> เค้กสตรอว์เบอรี่</p>
            </div>
        </div>
        <div className='row mt-0 mt-md-5'>
            <div className='col-lg-4'>
                <img src={'./cake4.jpg'} className='mx-auto d-block img-fluid'/>
                <p className='content-cake' style={fontbg}> เค้กกาแฟ</p>
            </div>
            <div className='col-lg-4'>
              <img src='/cake5.jpg' className='mx-auto d-block img-fluid'/>
              <p className='content-cake' style={fontbg}> เค้กแฟนตาซี</p>
            </div>
            <div className='col-lg-4'>
              <img src='/cake6.jpg' className='mx-auto d-block img-fluid'/>
              <p className='content-cake' style={fontbg}> เค้กรวมมิตรขนม</p>
            </div>
        </div>
      </main>
    </>
  )
}



