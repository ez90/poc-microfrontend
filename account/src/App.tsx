import React from 'react';
import { Provider } from 'react-redux';

import createStore from './mainRedux/createStore';
import { modalReducer } from './redux/reducers';

import Settings from './components/Settings';
import ShowModalButton from './components/ShowModalButton';
import Modal from './components/Modal';
import { ModalProvider } from 'styled-react-modal';

const App = () => (
  <>
    <h1>Usage of multi state</h1>
    <p>👋 I&apos;m the feature application account using a global state from the main application and an internal state !</p>
    <p>
      This example is based on redux.
    </p>
    <p>
      There is a first reducer with the key "user" instanciated by the main application.<br />
      This reducer manage the connexion of a user.<br />
      If a user is connected, the name is displayed in the header in main application.<br />
      The feature application account also deals with this reducer (it manages the action of connection/disconnection).
    </p>
    <p>
      There is a second reducer with the key "modal" instanciated by the feature application account.<br />
      This reducer handle the display of an internal modal connection.
    </p>
    <ShowModalButton />
    <p>
      To avoid conflicts between states of each application. We can imagine naming convention for keys of reducers.
    </p>
    <p>
      This example show you that our architecture can manage multi states 🙂
    </p>
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
