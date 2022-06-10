import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Fukusayou } from '../../components/Fukusayou'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Fukusayou />
    </div>
  )
}

export default Home
