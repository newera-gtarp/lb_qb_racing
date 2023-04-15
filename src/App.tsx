import React from 'react';
import { NuiProvider } from 'react-fivem-hooks';
import styled from 'styled-components';

import { StyledEngineProvider, Paper, LinearProgress } from '@mui/material';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import Header, { HEADER_HEIGHT } from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import { DataSync } from './components/DataSync';
import { useLbPhoneSettings } from './hooks/useLbPhoneSettings';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
`;

const App = () => {
  const lbSettings = useLbPhoneSettings();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode={lbSettings?.display.theme ?? 'light'}>
        <Container square elevation={0}>
          <React.Suspense
            fallback={
              <LinearProgress
                color="primary"
                sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
              />
            }
          >
            <DataSync />
          </React.Suspense>

          <Header>Racing</Header>
          <Content>
            <React.Suspense
              fallback={
                <LinearProgress
                  color="primary"
                  sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
                />
              }
            >
              <Routes />
            </React.Suspense>
          </Content>
          <Footer />
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
};

const WithProviders: React.FC = () => (
  <NuiProvider>
    <App />
  </NuiProvider>
);

export default WithProviders;
