import { useState } from 'react'
import { Container, Options, Order } from './styles'
import { Button } from '../Button'
import { Select } from '../Select'

export function OptionList() {
  const [selectedOption, setSelectedOption] = useState('agencias')
  return(
    <Container>
      <Options>
        <Button 
          title='Agências' 
          onClick={() => setSelectedOption('agencias')} 
          selected={selectedOption === 'agencias'}
          variant= 'secondary'
          rounded
        />
        <Button 
          title='Chatbot' 
          onClick={() => setSelectedOption('chatbot')} 
          selected={selectedOption === 'chatbot'}
          variant= 'secondary'
          rounded
        />
        <Button 
          title='Marketing Digital' 
          onClick={() => setSelectedOption('marketing')} 
          selected={selectedOption === 'marketing'}
          variant= 'secondary'
          rounded
        />
        <Button 
          title='Geração de Leads' 
          onClick={() => setSelectedOption('leads')} 
          selected={selectedOption === 'leads'}
          variant= 'secondary'
          rounded
        />
        <Button 
          title='Mídia Paga' 
          onClick={() => setSelectedOption('midia')} 
          selected={selectedOption === 'midia'}
          variant= 'secondary'
          rounded
        />
      </Options>
      <Order>
        Ordenar por
        <Select/>
      </Order>
    </Container>
  )
}