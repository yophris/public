import { ThemeProvider } from '@mui/material';
import AppLayout from 'components/AppLayout';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function ClientScreen({ children }) {
  const [loaded, setLoaded] = useState(false);
  useEffect((_) => setLoaded(true), []);
  if (!loaded) return null;

  return children;
}

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow={true}
      />
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <AppLayout>
            <ClientScreen>
              <Component {...pageProps} />
            </ClientScreen>
          </AppLayout>
        </DndProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
