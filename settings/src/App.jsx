import React from 'react';
import { Provider } from 'react-redux';

import createStore from './mainRedux/createStore';
import { modalReducer } from './redux/reducers';
import ShowModalButton from './components/ShowModalButton';

import Modal from './components/Modal';
import { ModalProvider } from 'styled-react-modal';

const App = () => (
  <>
    <h1>
      POC context: Each feature application have a state that is not conflicting
      with the main application state
    </h1>
    <p>👋 I&apos;m the feature application settings and I&apos;m using states and redux !</p>
    <p>
      I have my own state to display a modal and I&apos;m using the global state from main application to change name of the user.
    </p>
    <ShowModalButton />
    <p>
      To avoid conflicts between states of each application. We can imagine
      naming convention for keys of reducers.
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
