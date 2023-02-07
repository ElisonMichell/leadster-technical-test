import * as SelectPrimitive from '@radix-ui/react-select';
import { Plus_Jakarta_Sans } from '@next/font/google';
import { 
  SelectTrigger,
  SelectContent, 
  SelectViewport, 
  SelectItem,
} from './styles'
import { CaretDown } from 'phosphor-react';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export function Select() {
  return(
    <SelectPrimitive.Root defaultValue='publish-date'>
      <SelectTrigger aria-label='order'>
        <SelectPrimitive.Value placeholder='Data de Publicação' />
        <CaretDown size={16} weight="fill" />
      </SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectContent position='popper'>
          <SelectViewport>
            <SelectItem value="publish-date" className={font.className}>
              <SelectPrimitive.ItemText>Data de Publicação</SelectPrimitive.ItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}