import 'styled-components';

interface theme {
  colors: {
		text: string,
	} 
}

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}