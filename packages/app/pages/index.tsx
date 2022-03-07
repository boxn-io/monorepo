import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles["with-sidebar"]}>
      <div>sidebar{/* sidebar */}</div>
      <div>content{/* non-sidebar */}</div>
    </div>
  )
}


export default Home
