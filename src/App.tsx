import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainView from 'src/ui/views/MainView';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import testStore from 'src/stores/store';
import configureEpics from 'src/epics/configureEpics';

const epicMiddleWare = createEpicMiddleware();

function configureStore() {
  const epics = configureEpics();
  const store = createStore(
    testStore,
    applyMiddleware(epicMiddleWare)
  );

  epicMiddleWare.run(epics);

  return store;
}

const ReactApp = () => {
  const reduxStore = configureStore();

  if (process.env.NODE_ENV === 'development') {
    console.debug('Running app in Development Mode');
    window['store'] = reduxStore;
  }

  return ReactDOM.render(
    <App store={reduxStore} />,
    document.getElementById('react-root')
  );
}

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background-color: #f5f6fa;
`;

const App: React.SFC<any> = ({ store }: any) => (
  <Provider store={store}>
    <AppContainer>
      <MainView />
    </AppContainer>
  </Provider>
)

ReactApp();
