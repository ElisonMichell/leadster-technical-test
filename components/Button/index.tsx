import { ButtonHTMLAttributes } from 'react';
import { Container, StyleProps } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  title: string;
}

export function Button({title, selected, rounded, ...props}:ButtonProps) {
  return(
    <Container rounded={rounded} selected={selected} {...props}>
      {title}
    </Container>
  )
}