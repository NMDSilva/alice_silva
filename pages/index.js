import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Aniversário Alice Silva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          id='logo_encanto'
          className={styles.logo}
          src="/encanto.jpg"
          alt="Encanto Logo"
          width={1280}
          height={802}
          priority
        />
        <h1>Alice Silva</h1>
      </main>
    </>
  )
}
