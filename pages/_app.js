import { Modal, ThemeProvider, Typography } from '@mui/material';
import AppLayout from 'components/AppLayout';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { render } from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'components/AlertTemplate';
import useFileUploadStore from 'store/useFileUploadStore';
import { Box } from '@mui/system';
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function ClientScreen({ children }) {
  const [loaded, setLoaded] = useState(false);
  useEffect((_) => setLoaded(true), []);
  if (!loaded) return null;

  return children;
}

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  const progress = useFileUploadStore((state) => state.progress);

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow={true}
      />
      <AlertProvider template={AlertTemplate} {...options}>
        <QueryClientProvider client={queryClient}>
          <DndProvider backend={HTML5Backend}>
            <AppLayout>
              <ClientScreen>
                <Component {...pageProps} />
              </ClientScreen>
            </AppLayout>
          </DndProvider>
        </QueryClientProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default MyApp;
