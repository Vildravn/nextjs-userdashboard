import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import styles from './Primary.module.css'

const inter = Inter({ subsets: ['latin'] })

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Users app</title>
        <meta name="description" content="Users app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.wrapper} ${inter.className}`}>
        {children}
      </main>
    </>
  )
}

export default PrimaryLayout
