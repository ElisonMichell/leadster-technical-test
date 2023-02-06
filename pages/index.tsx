import Head from 'next/head'
import { Plus_Jakarta_Sans } from '@next/font/google'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        Hello World!
      </main>
    </>
  )
}
