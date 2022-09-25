import React from "react"
import styles from "../styles/layout.module.css"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <h3 className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/product"><a>Product</a></Link></li>
            <li><Link href="/shop/food"><a>Food</a></Link></li>
          </ul>
        </nav>
      </h3>
      <main>{children}</main>
    </>
  )
}