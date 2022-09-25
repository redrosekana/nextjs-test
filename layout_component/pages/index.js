import React from "react"
import styles from "../styles/home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Home</h2>
      <Link href="/about" >
        <a className="btn btn-info ms-3">Go</a>
      </Link>
    </main>
  )
}
