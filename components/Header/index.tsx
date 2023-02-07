import Image from 'next/image'
import { Container } from './styles'

import leadster from '/assets/leadster.svg'

export function Header() {
	return(
		<Container>
			<Image src={leadster} alt="Leadster logo" />
		</Container>
	)
}