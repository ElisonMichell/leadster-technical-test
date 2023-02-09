import Image from 'next/image'
import { Container, ImageContainer } from './styles'
import thumbnail from '/assets/thumbnail.png'
import play from '/assets/play.svg'
import { ButtonHTMLAttributes } from 'react'

export function Card({...props}:ButtonHTMLAttributes<HTMLButtonElement>) {
  return(
    <Container {...props}>
      <ImageContainer>
        <Image src={thumbnail} alt='card thumbnail' unoptimized/>
        <Image className='play-button' src={play} alt='play'/>
      </ImageContainer>
      <div className='content'>
        Como aumentar sua Geração de Leads feat. Traktor
      </div>
    </Container>
  )
}