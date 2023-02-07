import 'styled-components';

interface theme {
  colors: {
    primary: string,
    surface: string,
		text: string,
    border: string,
    white: string,
	} 
}

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}