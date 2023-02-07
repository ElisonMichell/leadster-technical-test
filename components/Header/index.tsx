import Image from 'next/image'
import { Logo, HeroSection } from './styles'

import leadster from '/assets/leadster.svg'
import asset from '/assets/asset-header.svg'

export function Header() {
	return(
		<header>
			<Logo>
				<Image src={leadster} alt="Leadster logo" />
			</Logo>
			<HeroSection>
				<div>
					<h1>
						Menos Conversinha,<br/>
						<span>
							Mais Conversão
							<Image src={asset} alt="" />
						</span>
					</h1>
					<h2>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</h2>
				</div>
			</HeroSection>
		</header>
	)
}