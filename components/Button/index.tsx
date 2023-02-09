import React, { ButtonHTMLAttributes } from 'react';
import { Container, StyleProps } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  title: string;
  icon?: React.ReactNode
}

export function Button({title, selected, rounded, icon, ...props}:ButtonProps) {
  return(
    <Container rounded={rounded} selected={selected} {...props}>
      {title}
      {icon}
    </Container>
  )
}