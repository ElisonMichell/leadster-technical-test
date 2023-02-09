import Image from 'next/image'
import { CloudArrowDown, X } from 'phosphor-react'
import { Container, Frame, Content, Label } from './styles'
import youtube from '/assets/youtube.png'

interface VideoModalProps {
  isOpen: boolean;
  requestClose: Function;
}

export function VideoModal(props:VideoModalProps) {
  return(
    <Container isOpen={props.isOpen}>
      <Frame>
        <button onClick={() => props.requestClose()}><X size={20} /></button>
        <header>
          <h4>Webinar:Como aumentar sua<br/> Geração de Leads feat. Traktor</h4>
        </header>
        <div className='scroll'>
          <Image src={youtube} alt=""/>
          <Content>
            <span className='title'>Descrição</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim 
              veniam ultrices iaculis aliquam.
            </p>
            <span className='title'>Downloads</span>
            <div className='line'>
              <Label variant='primary'>
                <div className='icon'><CloudArrowDown size={20} /></div>
                <p>Spreadsheet.xls</p>
              </Label>
              <Label variant='secondary'>
                <div className='icon'><CloudArrowDown size={20} /></div>
                <p>Document.doc</p>
              </Label>
              <Label variant='tertiary'>
                <div className='icon'><CloudArrowDown size={20} /></div>
                <p>Presentation.ppt</p>
              </Label>
            </div>
          </Content>
        </div>
      </Frame>
    </Container>
  )
}