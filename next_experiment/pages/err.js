import React from 'react'
import ErrorPage from "next/error";
/* สามารถกำหนด err ในหน้านั้นได้ */

export default function Err() {
  return (
    <>
        <ErrorPage statusCode={404}/>
    </>
  )
}
