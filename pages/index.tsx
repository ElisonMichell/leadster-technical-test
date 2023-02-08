import { useState } from 'react'
import Head from 'next/head'
import { Plus_Jakarta_Sans } from '@next/font/google'
import { Content, CardList, NavBar } from '../styles/home-styles'

import { Header } from '@/components/Header'
import { OptionList } from '@/components/OptionList'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { LeadBanner } from '@/components/LeadBanner'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const [selectedPage, setSelectedPage] = useState(1)
  return (
    <>
      <Head>
        <title>Leadster</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Header />
        <Content>
          <OptionList />
          <CardList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardList>
          <NavBar>
            Página
            <div>
              <Button 
                title='1'
                onClick={() => setSelectedPage(1)} 
                selected={selectedPage === 1}
                variant='tertiary'
              />
              <Button 
                title='2'
                onClick={() => setSelectedPage(2)} 
                selected={selectedPage === 2}
                variant='tertiary'
              />
              <Button 
                title='3'
                onClick={() => setSelectedPage(3)} 
                selected={selectedPage === 3}
                variant='tertiary'
              />
              <Button
                title='4'
                onClick={() => setSelectedPage(4)} 
                selected={selectedPage === 4}
                variant='tertiary'
              />
            </div>
          </NavBar>
        </Content>
        <LeadBanner />
      </main>
    </>
  )
}
