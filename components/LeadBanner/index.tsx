import { Root, Container, Chart, Content } from './styles'
import Image from 'next/image'

import chart from '/assets/chart.png'
import selo from '/assets/selo.png'
import card from '/assets/card.svg'
import star from '/assets/stars.svg'
import { Button } from '../Button'

export function LeadBanner() {
  return(
    <Root>
      <Container>
        <Chart>
          <Image src={chart} alt='leadster chart' unoptimized/>
        </Chart>
        <Content>
          <div className='title'>
            <h3>
              Pronto para triplicar sua<br/>
              <b>Geração de Leads?</b>
            </h3><br/>
            <p>Criação e ativação em <b>4 minutos.</b></p>
          </div>
          <div className='line-content'>
            <Button title='VER DEMONSTRAÇÃO' rounded variant='primary'/>
            <Image src={selo} alt="selo RD Station" />
          </div>
          <div className='footer-content'>
            <Image src={card} alt='card icon'/>
            <p><b>Não</b> é necessário Cartão de Crédito | </p>
            <Image src={star} alt='star icon'/>
            <p><b>4.9</b>/5 média de satisfação</p>
          </div>
        </Content>
      </Container>
    </Root>
  )
}