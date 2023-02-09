import Image from 'next/image'
import { Button } from '../Button'
import { Container, Content, FooterLine } from './styles'

import logo from '/assets/leadster.svg'
import linkedin from '/assets/linkedin.svg'
import facebook from '/assets/facebook.svg'
import instagram from '/assets/instagram.svg'

export function Footer() {
  return(
    <Container>
      <div className='brand'>
        <Image src={logo} alt='Leadster logo' width={268}/>
        <h3>Transformando visitantes em clientes</h3>
      </div>
      <Content>
        <div className='links'>
          <span>Links Principais</span>
          <Button title='Home' variant='text'/>
          <Button title='Ferramenta' variant='text'/>
          <Button title='Preços' variant='text'/>
          <Button title='Contato' variant='text'/>
        </div>
        <div className='links'>
          <span>Cases</span>
          <Button title='Geração de Leads B2B' variant='text'/>
          <Button title='Geração de Leads em Software' variant='text'/>
          <Button title='Geração de Leads em Imobiliária' variant='text'/>
          <Button title='Cases de Sucesso' variant='text'/>
        </div>
        <div className='links'>
          <span>Materiais</span>
          <Button title='Blog' variant='text'/>
          <Button title='Parceria com Agências' variant='text'/>
          <Button title='Guia Definitivo do Marketing' variant='text'/>
          <Button title='Materiais Gratuitos' variant='text'/>
        </div>
        <address className='links'>
          <span>Siga a Leadster</span>
          <div className='social-media'>
            <a href='https://www.linkedin.com/company/leadster-platform/' target={'_blank'} rel={'noreferrer'}>
              <Image src={linkedin} alt='linkedin button' width={16}/>
            </a>
            <a href='https://www.instagram.com/leadster.com.br/' target={'_blank'} rel={'noreferrer'}>
              <Image src={facebook} alt='facebook button' width={16}/>
            </a>
            <a href='https://www.facebook.com/leadsterplatform/' target={'_blank'} rel={'noreferrer'}>
              <Image src={instagram} alt='instagram button' width={16}/>
            </a>
          </div>
          <p><b>Email:</b> contato@leadster.com.br</p>
          <p><b>Telefone:</b> (42) 98828-9851</p>
        </address>
      </Content>
      <FooterLine>
        <div className='content'>
          <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href='https://leadster.com.br/'>Leadster</a></p>
          <address>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</address>
        </div>
      </FooterLine>
    </Container>
  )
}