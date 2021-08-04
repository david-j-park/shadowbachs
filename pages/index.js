import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shadow Bachs</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Dawning+of+a+New+Day&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.bgpic}>
      <div className={styles.title}>
          Shadow Bachs
      </div>
      </div>
      
      <div>
        <p className={styles.reg}>Shadow Bachs is a band that knows how to find a deep groove. Born from a love of the downtown New York warehouse CBGB’s scene, the Bachs have found their own scene playing clubs in and around New York. Harry Chronic, a singer/songwriter/guitarist of uncommon subtlety, fronts the band. Dan Schwartzman provides a melodic punch on keys, and Sammy Skins on drums and Dave Park on bass anchor the outfit with a skin-tight sound.</p>
      </div>
      
    </div>
  )
}
