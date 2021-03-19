import React from 'react';
import { Provider } from 'react-redux';

import createStore from './mainRedux/createStore';
import { modalReducer } from './redux/reducers/modal';

import Settings from './components/Settings';
import ShowModalButton from './components/ShowModalButton';
import Modal from './components/Modal';
import { ModalProvider } from 'styled-react-modal';

const App = () => (
  <>
    <h1>App 2</h1>
    <Settings />
    <ShowModalButton />
    <ModalProvider>
      <Modal />
    </ModalProvider>
  </>
);

const AppWrapper = ({ store }) => {
  const computedStore = store || createStore({});

  computedStore.injectReducer('modal', modalReducer);

  return (
    <Provider store={computedStore}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
