import styled from 'styled-components'

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 5rem;

	img {
			height: 2.25rem;
			width: auto;
	}
`

export const HeroSection = styled.div`
	background: ${props => props.theme.colors.surface};
	padding: 11rem 0;

	div {
		width: max-content;
		margin: auto;
		text-align: center;

		h1 {
			padding: 1rem 2rem;
			position: relative;
			font-weight: 500;
			font-size: 3rem;

			::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 1px;
				bottom: 0;
				left: 0;
				background: ${props => props.theme.colors.border};
			}
		}

		span {
			position: relative;
			color: ${props => props.theme.colors.primary};
			font-size: 5.5rem;
			font-weight: bold;

			img {
				position: absolute;
				right: -20px;
				top: 14px;
			}
		}

		h2 {
			margin-top: 1.25rem;
			font-size: 1.125rem;
		}
	}
`