import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import './styles/reset.css'
import {GlobalStyle} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </ThemeProvider>
  )
}

export default App
