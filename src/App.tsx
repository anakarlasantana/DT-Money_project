import { ThemeProvider } from "styled-components";
import { Transitions } from "./pages/transations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
         <Transitions />
    </ThemeProvider>
   
  )
}


