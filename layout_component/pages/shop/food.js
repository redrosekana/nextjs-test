import React from 'react'
import Layout from '../../components/layout'
import styles from "../../styles/test.module.css"

export default function Food() {
  return (
    <main className={styles.main}>
      <h2>Food</h2>
    </main>
  )
}

Food.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}
