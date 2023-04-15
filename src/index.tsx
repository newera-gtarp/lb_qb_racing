import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import App from './App';
import { NuiProvider } from 'react-fivem-hooks';
import { RecoilRoot } from 'recoil';
const AppContainer = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 40px;
  left: 1px;
  right: 1px;
  top: 42px;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
`;

const Root = () => {
  return (
    <HashRouter>
      <React.Suspense fallback="Loading app">
        <RecoilRoot>
          <NuiProvider>
            <AppContainer>
              <App />
            </AppContainer>
          </NuiProvider>
        </RecoilRoot>
      </React.Suspense>
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
