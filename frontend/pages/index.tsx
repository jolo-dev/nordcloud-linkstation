import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'animate.css'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Scatter } from 'react-roughviz'

interface ScatterData {
  x: number[],
  y: number[]
}

export default function Home() {
  const devices = [{ x: 0, y: 0 }, { x: 100, y: 100 }, { x: 15, y: 10 }, { x: 18, y: 18 }]

  const [solutions, setSolutions] = useState<string[]>([])
  const [width, setWidth] = useState<number>(300)
  const [powerstation, setPowerstation] = useState<ScatterData>({ x: [], y: [] })
  const [powerstationReach, setPowerstationReach] = useState<number[]>([])

  const fetchData = useCallback(async (x: number, y: number) => {
    const result = await axios.get<string>(`api/best-powerstation/${x}/${y}`)
    setSolutions(solutions => [...solutions, result.data])
  }, [solutions]);

  const setInnerWidth = useCallback(() => {
    setWidth(window.innerWidth / 2);
  }, [width])

  const setPowerstationData = useCallback(() => {
    const x = [0, 20, 10, ...devices.map(dev => dev.x)]
    const y = [0, 20, 0, ...devices.map(dev => dev.y)]
    const radius = [10 * 10, 5 * 10, 12 * 10, ...devices.map(dev => 5)]
    setPowerstation({ x, y })
    setPowerstationReach(radius)
  }, [powerstation, powerstationReach])

  useEffect(() => {
    devices.map(async (dev) => {
      fetchData(dev.x, dev.y)
    })

    setInnerWidth()

    setPowerstationData()
  }, [])

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
          Current Position of the Powerstations [x,y,reach]
        </h2>
        <Scatter
          width={width}
          data={powerstation}
          radius={powerstationReach}
        />
        <p className={styles.description}>
          <ul>
            <li>Powerstation(0, 0, 10)</li>
            <li>Powerstation(20, 20, 5)</li>
            <li>Powerstation(10, 0, 12)</li>
          </ul>
        </p>
        <h2>
          Solutions for current devices which are fetched via API
        </h2>
        <p className={styles.description}>
          <ul>
            {solutions.map(sol => {
              return (
                <li key={sol}>{sol}</li>)
            })}
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
