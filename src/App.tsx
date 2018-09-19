import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainView from 'src/ui/views/MainView';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import testStore from 'src/stores/immerStore';
import configureEpics from 'src/epics/configureEpics';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
  const epics = configureEpics();

  const epicMiddleWare = createEpicMiddleware();
  const store = createStore(
    testStore,
    composeWithDevTools(applyMiddleware(epicMiddleWare))
  );
  
  epicMiddleWare.run(epics);

  return store;
}

const ReactApp = () => {
  const reduxStore = configureStore();
  const { dispatch, getState } = reduxStore;

  if (process.env.NODE_ENV === 'development') {
    console.debug('Running app in Development Mode');
    window['redux'] = {dispatch, getState};
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
