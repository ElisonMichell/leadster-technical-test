import 'styled-components';

interface theme {
  colors: {
    primary: string,
    surface: string,
		text: string,
    border: string,
	} 
}

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}