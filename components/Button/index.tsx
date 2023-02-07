import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected?: boolean;
}

export function Button({title, selected, ...props}:ButtonProps) {
  return(
    <Container selected={selected} {...props}>
      {title}
    </Container>
  )
}