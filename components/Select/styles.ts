import styled from 'styled-components'
import * as SelectPrimitive from '@radix-ui/react-select';

export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2.5rem;
  background-color: white;
  color: ${props => props.theme.colors.text};
  border-radius: 0.75rem;
  padding: 0 0.75rem;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.text};

  :hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export const SelectContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 0.75rem;
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  margin-top: 0.25rem;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  cursor: pointer;
`

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.25rem;
`

export const SelectItem = styled(SelectPrimitive.Item)`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  height: 2rem;
  padding: 0 1.75rem 0 1.5rem;
  position: relative;
  user-select: none;

  :hover {
    color: ${props => props.theme.colors.primary}
  }
`