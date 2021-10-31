import useSWR from 'swr'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'animate.css'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/10/20', fetcher)
  console.log(data);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordcloud Link Station</title>
        <meta name="description" content="A single page application for finding the best power to a given Point(x,y)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Solution
        </h1>

        <p className={styles.description}>
        This is a function that solves the most suitable (with most power) link station for a device at
given point [x,y].{' '}
        </p>

        <h2>
          Current Position of the Powerstations
        </h2>
        <p className={styles.description}>
          <ul>
            <li>Powerstation(0, 0, 10)</li>
            <li>Powerstation(20, 20, 5)</li>
            <li>Powerstation(10, 0, 12)</li>
          </ul>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a href="https://jolodev.guru">Made with <Image className="animate__animated animate__rubberBand animate__slow animate__infinite" src="/heart.svg" alt="Heart Icon" width={40} height={50} /> by Jolo</a>
      </footer>
    </div>
  )
}
