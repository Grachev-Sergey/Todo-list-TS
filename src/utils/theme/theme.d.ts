import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      generalBg: string;
      gray: string;
      whiteBg: string;
      headerTextColor: string;
      complitedTodo: string;
    },
    
    media: {
      small: string;
    },
  }
}